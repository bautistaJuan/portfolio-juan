async function contenfulApi(api) {
  try {
    const res = await fetch(api);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los datos de la API de Contentful");
  }
}

async function welcomeComponent(el) {
  const welcomeEl = document.createElement("section");
  welcomeEl.className = "section-1-welcome_name-img";

  welcomeEl.innerHTML = `
    <h1 class="h1-my-name">
    Hola
    <br/>
    <span style="color: #00ADB5">Soy Bautista</span>
    </h1>
    <div class="welcome_img-container">
    <img src="" alt="soy-juan" class="welcome-img"/>
    </div>
    `;
  el.appendChild(welcomeEl);

  const data = await contenfulApi(
    "https://cdn.contentful.com/spaces/dd68k6e6d1nc/environments/master/entries?access_token=CcxcQVXE2pHoueZ7GaLIhx8UERMyLUP2pCWUv_u4lyI"
  );
  const asset = data.includes.Asset.find(asset => {
    const imageTitle = "Una foto de bienvenida";
    return asset.fields.title.includes(imageTitle);
  });
  const welcomeImgEl = document.querySelector(".welcome-img");
  welcomeImgEl.src = asset.fields.file.url;
}

export { welcomeComponent };
