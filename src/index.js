import { initRouter } from "./router";
import "./components/componentHeader/header";
function main() {
  const root = document.querySelector(".root");
  initRouter(root);
}
main();
