function servicesPage(params) {
  console.log("Servicios");
  const div = document.createElement("div");

  div.innerHTML = `
    <h1 style="margin:0px; text-align:start; ">
    Servicios Page
    <custom-projects></custom-projects>
    <h1>
  `;
  return div;
}

export { servicesPage };
