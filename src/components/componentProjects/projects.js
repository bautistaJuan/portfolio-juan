import { setImages } from "../../pages/home/setImages";
import { stylesForProjects } from "./projects-styles";
customElements.define(
  "custom-projects",
  class Projects extends HTMLElement {
    shadow = ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      stylesForProjects(this.shadow);
      this.render();
    }
    render() {
      const { footerImg } = setImages();
      const div = document.createElement("div");
      div.className = "div-container";
      div.innerHTML = `
      <custom-card img=${footerImg} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${footerImg} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${footerImg} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${footerImg} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${footerImg} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      `;

      this.shadow.appendChild(div);
    }
  }
);
