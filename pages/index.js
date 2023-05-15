 async function main(){
  const header = document.querySelector(".header");
  headerComponent(header);

  const welcome = document.querySelector(".section-1-welcome");
  welcomeComponent(welcome);
  
  const presentation = document.querySelector(".section-2-presentation")
  presentationComponent(presentation);

  const services = document.querySelector(".section-3-services");
  servicesComponent(services);
}
main();