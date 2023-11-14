function contactPage(params) {
  console.log("Contact");
  const div = document.createElement("div");

  div.innerHTML = `
    <h1 style="margin:0px; text-align:start; ">
      Contacto
    <h1>
  `;
  return div;
}

export { contactPage };
