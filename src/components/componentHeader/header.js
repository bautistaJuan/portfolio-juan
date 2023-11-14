import { stylesForHeader } from "./header-styles";
customElements.define(
  "header-nav",
  class Header extends HTMLElement {
    shadow = ShadowRoot;
    name = String;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      stylesForHeader(this.shadow);
      //   Validar que name obtenga el nombre
      this.name = this.getAttribute("name");
      const validName = this.name != null && this.name !== "";
      if (validName) {
      } else {
        console.error(`atribute name not found`);
      }
      this.render();
    }
    render() {
      const divContainer = document.createElement("div");
      divContainer.classList.add("header-nav-container");
      divContainer.innerHTML = `
        <div class="header-name-button">
          <h1 class="name-h1">${this.name}</h1>
          <button class="header_open-options">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <nav class="header-nav">
         <ul class="header_nav-ul">
            <li class="header_nav-ul_li" value="/servicios"><span>Works</span></li>
            <li class="header_nav-ul_li" value="/contacto"><span>Contact</span></li>
          </ul>
        </nav>

      `;

      const btn = divContainer.querySelector(".header_open-options");
      const navMenu = divContainer.querySelector(".header-nav");
      const navMenuLi = navMenu.querySelectorAll("li");
      navMenuLi.forEach(list => {
        list.addEventListener("click", () => {
          const route = list.getAttribute("value");
          const eventLi = new CustomEvent("liRoute", {
            detail: {
              route: route,
            },
          });
          this.dispatchEvent(eventLi);
        });
      });
      function btnShowOptionsMenu() {
        let isActive = false;
        btn.addEventListener("click", e => {
          isActive = !isActive;
          if (isActive) {
            btn.classList.add("header_open-options-active");
            navMenu.style.display = "flex";
          } else {
            btn.classList.remove("header_open-options-active");
            navMenu.style.display = "none";
          }
        });
      }
      btnShowOptionsMenu();

      this.shadow.appendChild(divContainer);
    }
  }
);
