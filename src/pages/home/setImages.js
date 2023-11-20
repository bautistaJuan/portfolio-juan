export function setImages() {
  const imgJuan = new URL("../../images/foto.jpg", import.meta.url).toString();
  const imgIcon = new URL(
    "../../images/downarrow_121316.svg",
    import.meta.url
  ).toString();

  const imagesURL = {
    juan: imgJuan,
    icon: imgIcon,
  };
  return imagesURL;
}
