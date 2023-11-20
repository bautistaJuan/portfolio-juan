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
        @media (min-width:500px){
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
        }
        @media (min-width:500px){
            .button-menu{
                display:none;
            }
        }
        @media (min-width:500px){
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
    `;
  shadow.appendChild(styles);
}
export { stylesForHeader };
