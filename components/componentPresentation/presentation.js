async function presentationComponent(htmlContainer) {
    const presentation = document.createElement("section");
    presentation.className = "section-2-presentation_about-me"

    presentation.innerHTML = `
    <div class="about-me_h2-p">
        <h2 class="soy-juan">Soy Bautista</h2>
        <p class="about-me_p"></p>
    </div>
    <img src="" alt="img-juan" class="img"/>
    `
    htmlContainer.appendChild(presentation);

    const data = await contenfulApi("https://cdn.contentful.com/spaces/dd68k6e6d1nc/environments/master/entries?access_token=CcxcQVXE2pHoueZ7GaLIhx8UERMyLUP2pCWUv_u4lyI");
    const presentationImg = document.querySelector(".img");
    const presentationP = document.querySelector(".about-me_p");
    const imageTitle = "Imagen de presentacion"

    const asset = data.includes.Asset.find((asset) => {
        const ok = asset.fields.title.includes(imageTitle);
        return ok;
      }
      );
      presentationImg.src = asset.fields.file.url;
      presentationP.textContent = data.items[0].fields.description 
    }