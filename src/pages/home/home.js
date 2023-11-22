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
        <h2 class="name">Soy <b style="color:#4913fc"> Juan</b></h2>
        <p>
          Soy un Apasionado de la Tecnología y Programador Autodidacta 
        </p>
        <p>
        Me gusta la música, toco la guitarra para alimentar el alma  
        </p>
        <p>
         Argentina, Buenos Aires. 
        </p>
        
        <h3>Conocimientos</h3>
        <span id="cargue">Frontend developer</span> | <span id="html">HTML5</span> | <span id="css">CSS</span> | <span id="tailwind">Tailwind CSS</span> | <span id="javascript">JavaScript</span> | <span id="typescrip">TypeScript</span> | <span id="react">React</span> | <span id="firestore">Firestore / Firebase</span> | <span id="git">Git</span> | <span id="poo">POO</span> | <span id="npm">npm</span> | <span id="nodejs">Node.js</span>  | <span id="spa">SPA</span>  | <span id="api">REST API</span> 
        <br>
        <br>
      </div>
      </div>
      `;
  // <img src=${images.icon} class="arrow">
  return div;
}

export { homePage };
