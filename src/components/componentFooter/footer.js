import { setImages } from "../../pages/home/setImages";
import { initRouter } from "../../router";
customElements.define(
  "custom-footer",
  class Foorter extends HTMLElement {
    shadow = ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { footerImg } = setImages();
      const style = document.createElement("style");
      style.innerHTML = `

        .container{
          font-family: 'Roboto';
          width: 100%; 
          background-image: url(${footerImg});
          background-size: cover;
          background-position: center;
          margin-top: 10px; 
          border-radius: 5px 5px ;
        }
        @media (min-width: 600px) {
          .container{
            width: 100%; 
            background-size: cover;
          }
        }
        .footer-section{
          display: flex; 
          flex-direction: column;
          text-align: center;
        }
        .container-redes{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .redes {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 0;
          justify-content: space-around;
        }
        @media (min-width: 600px) {
          .redes {
            margin-top: 20px;
            justify-content: space-evenly;
          }
        }
        .linkdIn,
        .github {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #000;
        }
        .text-hover{
          margin: 0px;
          font-size: 12px;
        }
        @media (min-width: 600px) {
          .text-hover{
            margin: 0px;
            font-size: 18px;
          }

        }
        .nav-ul_li{
          cursor: pointer; 
          text-decoration: none;
          display: flex;
          flex-direction: column; 
       }
       .nav-ul{
         list-style:none;
         display:flex;
         flex-direction:column;
         justify-content: center;
         align-items: center;
         gap: 40px;
         font-size: 25px;
         padding-inline-start: 0px;
         
        }
        @media (min-width: 600px) {
          .nav-ul{
            flex-direction: row;
            justify-content: space-evenly;
          }
        }
      `;
      this.shadow.appendChild(style);
      this.render();
    }
    render() {
      const { github, linkedin, home, services, contact } = setImages();
      const footerEl = document.createElement("div");
      footerEl.className = "container";
      footerEl.innerHTML = `
        <div class="footer-section">
          <div class="container-redes">
            <ul class="nav-ul">
              <li class="nav-ul_li">
                <a href="http:/home">
                  <img src=${home} >
                  </a>
                  <span>Home</span>
              </li>
              <li class="nav-ul_li">
                <a href="http:/servicios">
                  <img src=${services} >
                  </a>
                  <span>Works</span>
              </li>
              <li class="nav-ul_li">
                <a href="http:/contacto">
                  <img src=${contact} >
                  </a>
                  <span>Contact</span>
              </li>
            </ul>
            <div class="redes">
              <div class="linkdIn">
                <a href="http://google.com">
                <img src=${linkedin} alt="linked" class="linkind-img">
                </a>
                <h2 class="text-hover">LinkdIn</h2>
              </div>
              <div class="github">
                <img src=${github} alt="git" class="github-img" >
                <h2 class="text-hover">GitHub</h2>
              </div> 
            </div>
          </div>
          <span class="año">2023</span>
        </div>
        
      `;
      this.shadow.appendChild(footerEl);
    }
  }
);
