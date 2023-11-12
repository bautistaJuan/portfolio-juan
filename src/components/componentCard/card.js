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

async function addCards() {
  const cards = await contenfulApi("https://cdn.contentful.com/spaces/dd68k6e6d1nc/environments/master/entries?access_token=CcxcQVXE2pHoueZ7GaLIhx8UERMyLUP2pCWUv_u4lyI&content_type=servicios");

  let imagesUrl = cards.includes.Asset.map(img => img.fields.file.url);
  const getInformations = cards.items.map((c,i)=>{
    return {
      title : c.fields.title,
      description: c.fields.description,
      img : imagesUrl[i]
    }
  });
  return getInformations;
}


async function servicesComponent(el) {
  const addCardsInfo = await addCards();

  const servicesEl = document.createElement("div");
  servicesEl.innerHTML = `
    <h1 class="h1-card">
     Mis <span style="color:#00ADB5">Servicios</span>
    </h1>
  `
  el.appendChild(servicesEl);
  // acá creo las cartas obteniendo la info que tiene addCardsInfo que a su vez la trae desde addCards()  
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  el.appendChild(cardContainer);

  for (const info of addCardsInfo) {
    const cardEl = document.createElement("div");
    cardEl.className = "card"
    cardEl.innerHTML = `
      <img src="${info.img}" alt="Servicios" class="img-card">
      <h3 class="h3-card">${info.title}</h3>
      <p class="p-card">${info.description}</p>
      <div class="link"><a href="#">Ver más...</a></div>
    `
    cardContainer.appendChild(cardEl);
  }
}



