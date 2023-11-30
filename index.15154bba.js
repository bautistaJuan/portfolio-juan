var e=globalThis,t={},i={},n=e.parcelRequire1013;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire1013=n),(0,n.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,n=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)n.set(t[i],{baseUrl:e,path:t[i+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7GeUN","index.15154bba.js","7KJ9W","foto.68e49f6e.jpg","coBxp","hogar.b22bb092.png","lVigQ","icon-contact.fd7bd620.png","6PKan","icon-negocio.d7888752.png","iXjh4","github.b4802c98.png","cbOqe","linkedin.feafa8e6.png","gxTS7","vecteezy_work-from-home-vector-flat-style-illustration-online-and_22178510.648aa28c.jpg"]'));var a={};a=new URL("foto.68e49f6e.jpg",import.meta.url).toString();var o={};o=new URL("hogar.b22bb092.png",import.meta.url).toString();var r={};r=new URL("icon-contact.fd7bd620.png",import.meta.url).toString();var s={};s=new URL("icon-negocio.d7888752.png",import.meta.url).toString();var l={};l=new URL("github.b4802c98.png",import.meta.url).toString();var c={};c=new URL("linkedin.feafa8e6.png",import.meta.url).toString();var d={};function p(){let e=new URL(a).toString(),t=new URL(o).toString(),i=new URL(r).toString(),n=new URL(s).toString(),p=new URL(l).toString(),u=new URL(c).toString(),m=new URL(d).toString();return{juan:e,github:p,linkedin:u,footerImg:m,home:t,contact:i,services:n}}d=new URL("vecteezy_work-from-home-vector-flat-style-illustration-online-and_22178510.648aa28c.jpg",import.meta.url).toString();const u="/porfolio-juan";function m(){return location.host.includes("bautistajuan.github.io")}const h=[{path:/\/home/,handle:function(e){let t=p(),i=document.createElement("div");return i.classList.add("home-page_container"),i.innerHTML=`
    <div class="main">
      <div class="img-and-text-container">
        <div class="img-container">
          <img src=${t.juan} class="img">
        </div>
        <h2 class="name">Soy <b style="color:#4913fc"> Juan</b></h2>
        <p>
          Soy un Apasionado de la Tecnolog\xeda y Programador Autodidacta 
        </p>
        <p>
        Me gusta la m\xfasica, toco la guitarra para alimentar el alma  
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
      <custom-projects ></custom-projects>
      <custom-footer></custom-footer>

      `,i}},{path:/\/contacto/,handle:function(e){let t=document.createElement("div");return t.innerHTML=`
    <div class="form">
      <h3 class="titulo-h3">Escribime</h3>
      <section class="section">
        <div class="filedset">
          <label class="label" for="name">Nombre</label>
          <input class="input-text" type="text">
        </div>
          <div class="filedset">
          <label class="label" for="email">Email</label>
          <input class="input-text" type="text" id="email" required>
        </div>
        <div class="filedset">
          <label class="label" for="texto">Mensaje</label>
          <textarea class="textarea" name="mensaje" id="texto"></textarea>
        </div>
        <div class="filedset">
        <button class="label btn">Enviar</button>
        </div>
      </section>
    </div>
  `,t}},{path:/\/servicios/,handle:function(e){let t=document.createElement("div");return t.innerHTML=`
    <custom-projects ></custom-projects>
    <custom-footer></custom-footer>
  `,t}}];function f(e){class t extends HTMLElement{shadow=ShadowRoot;name=String;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){!function(e){let t=document.createElement("style");t.innerHTML=`
        .header-nav-container {
            font-family: 'Roboto';
            display: flex;
            flex-direction: column;
            text-align:center;

        }
        .name-h1 {
            margin: 0;
            padding: 0px;
            cursor: pointer;
            width: 120px; 
        }

        .header-name-button{
            display:flex;
            position: relative;
            flex-direction: row;
            justify-content: space-between;
            padding: 15px 10px 0;
            align-items: center;
        }
        .header-ul{
            display:none;
            flex-direction:row;
            justify-content: end;
            width: 100%;
        }
        @media (min-width:700px){
            .header-ul{
                display:flex;
            }
        }
        .header-ul-li{
            font-weight: bold;
            font-size: 30px;
            list-style:none;
            margin-right: 32px;
            cursor: pointer;
        }
        .container-nav{
            z-index: 1;
        }

        .nav{
            display:none;
            position: absolute;
            flex-direction:column;
            width:99%;
            height: 300px;
        }
  
        .nav-ul_li, .nav-ul {
            padding:0;
            margin:0;
        }
        .nav-ul_li{
           cursor: pointer; 
        }
        .nav-ul{
            background-color:#ffffff;
            list-style:none;
            display:flex;
            flex-direction:column;
            justify-content: space-around;
            width:100%;
            height: 300px;
        } 
        @madia (min-width:500px){
            .nav-ul{
                display:none;
            }
        }
        .nav-ul_li > span{
            font-size: 32px;
        }
        .button-menu{
            display: flex;
            flex-direction: column;
            width: 3rem;
            height: 3rem;
            border: 0;
            background: transparent;
            gap: .65rem;
            margin-top: auto;  
            cursor: pointer;
        }
        @media (min-width:700px){
            .button-menu{
                display:none;
            }
        }
        @media (min-width:700px){
            .button-menu-active{
                display:none;
            }
        }
        .button-menu > div{
            background-color: #000;
            height: 2px;
            width: 100%;
            border-radius: 5px;
            transition: all .2s;
            transform-origin: left;
        }
        .button-menu-active > div:first-child {
            transform: rotate(45deg);
        }
        .button-menu-active > div:nth-child(2) {
            opacity: 0;
        }
        .button-menu-active > div:last-child {
            transform: rotate(-45deg);
        }
    `,e.appendChild(t)}(this.shadow),//   Validar que name obtenga el nombre
this.name=this.getAttribute("name");let e=null!=this.name&&""!==this.name;e||console.error("atribute name not found"),this.render()}render(){let t;let i=document.createElement("div");i.classList.add("header-nav-container"),i.innerHTML=`
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
      `;let n=i.querySelector(".button-menu"),a=i.querySelector(".name-h1"),o=i.querySelector(".nav"),r=i.querySelectorAll("li");a.addEventListener("click",()=>{e.goTo(a.getAttribute("value"))}),r.forEach(t=>{t.addEventListener("click",()=>{let i=t.getAttribute("value");n.classList.remove("button-menu-active"),o.style.display="none",e.goTo(i)})}),t=!1,n.addEventListener("click",e=>{(t=!t)?(n.classList.add("button-menu-active"),o.style.display="flex"):(n.classList.remove("button-menu-active"),o.style.display="none")}),window.addEventListener("popstate",()=>{n.classList.remove("button-menu-active"),o.style.display="none"}),this.shadow.appendChild(i)}}customElements.define("header-nav",t)}customElements.define("custom-projects",class extends HTMLElement{shadow=ShadowRoot;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){(function(e){let t=document.createElement("style");t.innerHTML=`
    .h2{
      font-size:30px;
      color: red;
    }
    .div-container{
      padding-top: 30px;
      display: grid;
      margin-inline: auto;
      padding-inline: 24px;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
      justify-content : center;
   }
  `,e.appendChild(t)})(this.shadow),this.render()}render(){let{footerImg:e}=p(),t=document.createElement("div");t.className="div-container",t.innerHTML=`
      <custom-card img=${e} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${e} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${e} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${e} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      <custom-card img=${e} title="Mi Proyecto" desc="Descripcion del proyecto"></custom-card>
      `,this.shadow.appendChild(t)}}),customElements.define("custom-card",class extends HTMLElement{shadow=ShadowRoot;title=String;descripcion=String;img=Image;link=String;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.title=this.getAttribute("title")||"Titulo",this.descripcion=this.getAttribute("desc")||"Descripci\xf3n",this.img=this.getAttribute("img"),this.link="/servicios"}connectedCallback(){this.render()}render(){let e=document.createElement("div");e.className="div-card-container";let t=document.createElement("style");t.innerHTML=`
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
      `,e.innerHTML=`
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
        `,this.shadow.appendChild(e),this.shadow.appendChild(t)}}),customElements.define("custom-footer",class extends HTMLElement{shadow=ShadowRoot;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let{footerImg:e}=p(),t=document.createElement("style");t.innerHTML=`

        .container{
          font-family: 'Roboto';
          width: 100%; 
          background-image: url(${e});
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
      `,this.shadow.appendChild(t),this.render()}render(){let{github:e,linkedin:t,home:i,services:n,contact:a}=p(),o=document.createElement("div");o.className="container",o.innerHTML=`
        <div class="footer-section">
          <div class="container-redes">
            <ul class="nav-ul">
              <li class="nav-ul_li">
                <a href="http:/home">
                  <img src=${i} >
                  </a>
                  <span>Home</span>
              </li>
              <li class="nav-ul_li">
                <a href="http:/servicios">
                  <img src=${n} >
                  </a>
                  <span>Works</span>
              </li>
              <li class="nav-ul_li">
                <a href="http:/contacto">
                  <img src=${a} >
                  </a>
                  <span>Contact</span>
              </li>
            </ul>
            <div class="redes">
              <div class="linkdIn">
                <a href="http://google.com">
                <img src=${t} alt="linked" class="linkind-img">
                </a>
                <h2 class="text-hover">LinkdIn</h2>
              </div>
              <div class="github">
                <img src=${e} alt="git" class="github-img" >
                <h2 class="text-hover">GitHub</h2>
              </div> 
            </div>
          </div>
          <span class="a\xf1o">2023</span>
        </div>
        
      `,this.shadow.appendChild(o)}}),function(){let e=document.querySelector(".root");!function(e,t){function i(e){let t=m()?u+e:e;history.pushState({},"",t),n(t)}function n(t){console.log(`new route is: ${t}`);let n=m()?t.replace(u,""):t;for(let t of h)if(t.path.test(n)){let n=t.handle({goTo:i});e.firstChild?.remove(),e.appendChild(n)}}"/"==location.pathname||"/porfolio-juan/"==location.pathname?i("/home"):n(location.pathname),window.onpopstate=()=>{n(location.pathname)},t({goTo:i})}(e,f)}();//# sourceMappingURL=index.15154bba.js.map

//# sourceMappingURL=index.15154bba.js.map
