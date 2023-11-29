function contactPage(params) {
  const div = document.createElement("div");

  div.innerHTML = `
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
  `;
  return div;
}

export { contactPage };
