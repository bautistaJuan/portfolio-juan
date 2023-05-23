async function footerComponet(f) {
    const footerEl = document.createElement("div");
    footerEl.innerHTML = `
        <footer class="footer">
            <img src="./images/logo-inicio.png" class="footer-logo" title="Logo">
            <ul class="footer-ul">
            <li class="footer-li_home">
                <a href="./index.html" class="footer_home">
                <img src="./images/hogar.png" title="Home">
                <span>Home</span>
                </a>
                <li class="footer-li_services">
                <a href="./servicios.html" class="footer_services">
                    <img src="./images/icon-negocio.png" title="Servicios">
                    <span>Servicios</span>
                </a>
                <li class="footer-li_contact">
                    <a href="./contacto.html" class="footer_contact">
                    <img src="./images/icon-contact.png" title="Contacto">
                    <span>Contacto</span>
                    </a>
            </li>
            </ul>
            <div class="links-redes">
            <a href="" id="linkedin">
                <img src="./images/linkedin.png" class="footer-linkedin redes" title="Linkedin">
            </a>
            <a href="" id="github" >
                <img src="./images/github.png" class="footer-github redes" title="github">
            </a>
            <a href="" id="twitter">
                <img src="./images/twitter.png" class="footer-twitter redes" title="Twitter">
            </a>
            </div>
            <p class="copyright"> ©2023 - <a href="https://apx.school/" class="copyright">apx.school</a></p>
        </footer>
    `
    f.appendChild(footerEl);
}