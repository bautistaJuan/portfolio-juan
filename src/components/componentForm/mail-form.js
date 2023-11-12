async function envioForm() {
 const formularioEl = document.querySelector(".section-4-form_content");
 formularioEl.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombreForm = formularioEl.querySelector("#f-name").value;
    const mailForm = document.querySelector("#f-mail").value;
    const messageForm = document.querySelector("#f-text").value;

    const objData = {
      to: "bautistavega944@gmail.com",
      message: `Nombre: ${nombreForm}, Email: ${mailForm}, Mensaje: ${messageForm}`,
    };

    const url = "https://apx-api.vercel.app/api/utils/dwf";

    await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(objData),
    });
    formularioEl.reset();
  }); 
  
}