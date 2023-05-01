function main(){
  const btnAbrirVentana = document.getElementById("btn-open");
  const contenedoVentana = document.querySelector(".window-content");
  const btnCerrarVentana = document.getElementById("btn-close");
  btnAbrirVentana.addEventListener("click", ()=>{
    contenedoVentana.style.display ="flex";
  })
  btnCerrarVentana.addEventListener("click", ()=>{
    contenedoVentana.style.display = "none"
  })
}
main();
