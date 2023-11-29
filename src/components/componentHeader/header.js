import { stylesForHeader } from "./header-styles";
function headerComp(goTo) {
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
          <h1 class="name-h1" value="/home" >${this.name}</h1>
          <button class="button-menu">
            <div></div>
            <div></div>
            <div></div>
          </button>
          <ul class="header-ul">
            <li class="header-ul-li li-header" value="/home"><span>Home</span></li>
            <li class="header-ul-li li-header" value="/servicios"><span>Works</span></li>
            <li class="header-ul-li li-header" value="/contacto"><span>Contact</span></li>
          </ul>
        </div>
        <div class="container-nav">
          <nav class="nav">
            <ul class="nav-ul">
             <li class="nav-ul_li" value="/home"><span>Home</span></li>
             <li class="nav-ul_li" value="/servicios"><span>Works</span></li>
             <li class="nav-ul_li" value="/contacto"><span>Contact</span></li>
           </ul>
         </nav>          
       </div>      
      `;

      const btn = divContainer.querySelector(".button-menu");
      const h1Name = divContainer.querySelector(".name-h1");
      const navMenu = divContainer.querySelector(".nav");
      const navMenuLi = divContainer.querySelectorAll("li");

      h1Name.addEventListener("click", () => {
        goTo.goTo(h1Name.getAttribute("value"));
      });

      navMenuLi.forEach(list => {
        list.addEventListener("click", () => {
          const route = list.getAttribute("value");
          btn.classList.remove("button-menu-active");
          navMenu.style.display = "none";
          goTo.goTo(route);
        });
      });
      function btnShowOptionsMenu() {
        let isActive = false;
        btn.addEventListener("click", e => {
          isActive = !isActive;
          if (isActive) {
            btn.classList.add("button-menu-active");
            navMenu.style.display = "flex";
          } else {
            btn.classList.remove("button-menu-active");
            navMenu.style.display = "none";
          }
        });
      }
      btnShowOptionsMenu();
      window.addEventListener("popstate", () => {
        btn.classList.remove("button-menu-active");
        navMenu.style.display = "none";
      });

      this.shadow.appendChild(divContainer);
    }
  }

  customElements.define("header-nav", Header);
}

export { headerComp };
