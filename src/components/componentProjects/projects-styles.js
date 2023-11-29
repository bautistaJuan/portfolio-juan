function stylesForProjects(shadow) {
  const styles = document.createElement("style");
  styles.innerHTML = `
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
  `;
  shadow.appendChild(styles);
}
export { stylesForProjects };
