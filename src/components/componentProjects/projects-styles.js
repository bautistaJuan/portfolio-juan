function stylesForProjects(shadow) {
  const styles = document.createElement("style");
  styles.innerHTML = `
    .h2{
        font-size:30px;
        color: green; 
        margin: 0;
        padding: 20px;
        border: solid;
    }
  `;
  shadow.appendChild(styles);
}
export { stylesForProjects };
