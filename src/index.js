import { initRouter } from "./router";
import "./components/componentHeader/header";
import "./components/componentProjects/projects";
import { headerComp } from "./components/componentHeader/header";
function main() {
  const root = document.querySelector(".root");
  initRouter(root, headerComp);
}
main();
