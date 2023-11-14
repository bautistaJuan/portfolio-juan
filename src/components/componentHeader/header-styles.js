function stylesForHeader(shadow) {
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
            width:100%;
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
        .header_nav-ul_li > span{
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
  shadow.appendChild(styles);
}
export { stylesForHeader };
