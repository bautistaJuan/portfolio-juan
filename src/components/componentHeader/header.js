import "./header.css";
customElements.define(
  "header-nav",
  class Header extends HTMLElement {
    shadow = ShadowRoot;
    name = String;
    links = Object;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const styles = document.createElement("style");
      styles.innerHTML = `
      .header-nav-container {
            font-family: 'Cormorant Garamond', serif;
            display: flex;
            flex-direction: column;
            text-align:center;

        }
        .name-h1 {
          margin: 0;
          padding: 0px;
          font-size: 30px;
        }
        .header-name-button{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 15px 10px 0;
        }
        .header_nav-ul_li, .header_nav-ul {
            padding:0;
            margin:0;
        }
        .header-nav{
            position: absolute;
            display:none;
            flex-direction:column;
            width:98%;
            height:100vh;
            margin-top:65px;
        }
        .header_nav-ul{
            background-color:#ffffff;
            position: relative;
            list-style:none;
            height:70%;            
            display:flex;
            flex-direction:column;
            justify-content: space-evenly;
        }
        .header_nav-ul_li > a{
            text-decoration: none;
            font-size: 32px;

        }
        .header_open-options{
            display: flex;
            flex-direction: column;
            width: 3rem;
            height: 3rem;
            border: 0;
            background: transparent;
            gap: .65rem;
            margin-top: auto;  
            justify-content: center;
        }
        .header_open-options > div{
            background-color: #000;
            height: 2px;
            width: 100%;
            border-radius: 5px;
            transition: all .2s;
            transform-origin: left;
        }
        .header_open-options-active > div:first-child {
            transform: rotate(45deg);
        }
        .header_open-options-active > div:nth-child(2) {
            opacity: 0;
        }
        .header_open-options-active > div:last-child {
            transform: rotate(-45deg);
        }
      `;
      //append styles
      this.shadow.appendChild(styles);
      //   Validar que name obtenga el nombre
      this.name = this.getAttribute("name");
      this.links = this.getAttribute("links");
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
                    <li class="header_nav-ul_li"><a href="#">Works</a></li>
                    <li class="header_nav-ul_li"><a href="#">Contact</a></li>
                </ul>
            </nav>
      `;

      const btn = divContainer.querySelector(".header_open-options");
      const navMenu = divContainer.querySelector(".header-nav");
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
      this.shadow.appendChild(divContainer);
    }
  }
);
