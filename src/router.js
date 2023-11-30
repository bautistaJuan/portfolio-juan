import { homePage } from "./pages/home/home";
import { contactPage } from "./pages/contact/contacto";
import { servicesPage } from "./pages/servicios/servicios";

const BASE_PATH = "/portfolio-juan";

function isGithubPages() {
  return location.host.includes("bautistajuan.github.io");
}

const routes = [
  {
    path: /\/home/,
    handle: homePage,
  },
  {
    path: /\/contacto/,
    handle: contactPage,
  },
  {
    path: /\/servicios/,
    handle: servicesPage,
  },
];

function headerInit(headerFuntion, params) {
  return headerFuntion(params);
}

function initRouter(container, header) {
  function goTo(route) {
    const completePath = isGithubPages() ? BASE_PATH + route : route;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log(`new route is: ${route}`);

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const changePage = r.handle({ goTo: goTo });
        container.firstChild?.remove();
        container.appendChild(changePage);
      }
    }
  }

  if (location.pathname == "/" || location.pathname == "/portfolio-juan/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };

  // para que los botones del header puedan cambiar la pagina
  headerInit(header, { goTo: goTo });
}

export { initRouter };
