customElements.define(
  "custom-card",
  class Cards extends HTMLElement {
    shadow = ShadowRoot;
    title = String;
    descripcion = String;
    img = Image;
    link = String;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.title = this.getAttribute("title") || "Titulo";
      this.descripcion = this.getAttribute("desc") || "Descripción";
      this.img = this.getAttribute("img");
      this.link = "/servicios";
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const div = document.createElement("div");
      div.className = "div-card-container";
      const style = document.createElement("style");
      style.innerHTML = `
      .div-card-container{
        font-family: 'Roboto';
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
      }
      article {
        --img-scale: 1.001;
        max-width: 330px;
        position: relative;
        border-radius: 16px;
        box-shadow: none;
        background: #000;
        transform-origin: center;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
      }
      
      article a::after {
        position: absolute;
        inset-block: 0;
        inset-inline: 0;
        cursor: pointer;
        content: "";
      }
      
      /* basic article elements styling */
      article h2 {
        margin: 0 0 18px 0;
        font-size: 1.9rem;
        letter-spacing: 0.06em;
        color: #fff;
        transition: color 0.3s ease-out;
      }
      
      figure {
        margin: 0;
        padding: 0;
        aspect-ratio: 16 / 9;
        overflow: hidden;
      }
      
      article img {
        width: 100%;
        transform-origin: center;
        transform: scale(var(--img-scale));
        transition: transform 0.4s ease-in-out;
      }
      
      .article-body {
        padding: 24px;
      }
      
      article a {
        font-family: "Bebas Neue", cursive;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: #28666e;
        font-size: 1.5rem;
      }
      article p {
        color: #fff;
      }
      
      article a:focus {
        outline: 1px dotted #28666e;
      }
      
      article a .icon {
        min-width: 24px;
        width: 24px;
        height: 24px;
        margin-left: 5px;
        transform: translateX(var(--link-icon-translate));
        opacity: var(--link-icon-opacity);
        transition: all 0.3s;
      }
      
      article:has(:hover, :focus) {
        --img-scale: 1.1;
      }
      
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      
      
      @container card (min-width: 380px) {
        .article-wrapper {
          display: grid;
          grid-template-columns: 100px 1fr ;
          gap: 16px;
        }
        .article-body {
          padding-left: 0;
        }
        figure {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        figure img {
          height: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }
      }
      .sr-only:not(:focus):not(:active) {
        clip: rect(0 0 0 0); 
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap; 
        width: 1px;
      }
      `;
      div.innerHTML = `
          <article>
            <div class="article-wrapper">
              <figure>
                <img src=${this.img} alt="" />
              </figure>
              <div class="article-body">
                <h2>${this.title}</h2>
                  <p>${this.descripcion}</p>
              </div>
            </div>
          </article>
        `;
      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
);
