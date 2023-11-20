import { homePage } from "./pages/home/home";
import { contactPage } from "./pages/contact/contacto";
import { servicesPage } from "./pages/servicios/servicios";
import { headerComp } from "./components/componentHeader/header";
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
    history.pushState({}, "", route);
    handleRoute(route);
  }
  function handleRoute(route) {
    console.log(`new route is: ${route}`);

    for (const r of routes) {
      if (r.path.test(route)) {
        const changePage = r.handle({ goTo: goTo });
        container.firstChild?.remove();
        container.appendChild(changePage);
      }
    }
  }

  if (location.pathname == "/") {
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
