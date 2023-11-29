import { initRouter } from "./router";
import "./components/componentHeader/header";
import "./components/componentProjects/projects";
import "./components/componentProjects/projects-cards";
import "./components/componentFooter/footer";
import { headerComp } from "./components/componentHeader/header";
(function main() {
  const root = document.querySelector(".root");
  initRouter(root, headerComp);
})();
