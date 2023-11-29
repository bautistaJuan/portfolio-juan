function servicesPage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <custom-projects ></custom-projects>
    <custom-footer></custom-footer>
  `;
  return div;
}

export { servicesPage };
