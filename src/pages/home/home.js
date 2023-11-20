import { setImages } from "./setImages";
function homePage(params) {
  const images = setImages();
  const div = document.createElement("div");
  div.classList.add("home-page_container");
  div.innerHTML = `
    <div class="main">
      <div class="img-and-text-container">
        <div class="img-container">
          <img src=${images.juan} class="img">
        </div>
        <h2> Hola Soy Juan </h2>
      </div>
      <img src=${images.icon} class="arrow">
    </div>
  `;
  return div;
}

export { homePage };
