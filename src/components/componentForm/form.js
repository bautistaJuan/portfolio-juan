
function formComponent(el) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <section class="section-4-form">
            <h3 class="section-4-form_title">Escribime</h3>

            <form class="section-4-form_content" action="">
                <div class="section-4-form_name-email">
                    <label class="section-4-form_name">
                    <div class="section-4-form_name">Nombre</div>
                    <input class="section-4-form_input-name" id="f-name" type="text" placeholder="Tu nombre" />
                    </label>

                    <label>
                    <div class="section-4_form-email">Email</div>
                    <input class="section-4_input-mail" id="f-mail" type="text" placeholder="tu@mail.com" />
                    </label>
                </div>
                <label>
                    <div class="section-4_form-mensaje">Mensaje</div>
                    <textarea class="section-4_form-textarea" name="" id="f-text" placeholder="Mensaje"></textarea>
                </label>

                <div class="section-4_form-button">
                    <button class="button" id="f-btn">Enviar<img class="button-img" src="./images/vector.png" alt="send"></button>
                </div>
            </form>
        </section>
    `    
    el.appendChild(newDiv);
   envioForm();
}
