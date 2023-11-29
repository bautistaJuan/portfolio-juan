export function setImages() {
  const imgJuan = new URL("../../images/foto.jpg", import.meta.url).toString();
  const homeIcon = new URL(
    "../../images/hogar.png",
    import.meta.url
  ).toString();
  const contacto = new URL(
    "../../images/icon-contact.png",
    import.meta.url
  ).toString();
  const servicios = new URL(
    "../../images/icon-negocio.png",
    import.meta.url
  ).toString();
  const github = new URL("../../images/github.png", import.meta.url).toString();
  const linkedin = new URL(
    "../../images/linkedin.png",
    import.meta.url
  ).toString();
  const footerImg = new URL(
    "../../images/vecteezy_work-from-home-vector-flat-style-illustration-online-and_22178510.jpg",
    import.meta.url
  ).toString();
  const imagesURL = {
    juan: imgJuan,
    github: github,
    linkedin: linkedin,
    footerImg: footerImg,
    home: homeIcon,
    contact: contacto,
    services: servicios,
  };
  return imagesURL;
}
