import ui from "ui";
import { Home } from "./home";
import { About } from "./about";
import { BASE_URL } from "./config";

const routes = {
  "/": Home,
  "/about": About,
};

const App = (route) => {
  const component = routes[route];
  return component ? component() : ui.h1("404 Not Found");
};

const render = (route) => {
  document.querySelector("#root").innerHTML = "";
  document.querySelector("#root").appendChild(App(route).render());
};

const transformRoute = (route) => {
  if (route.startsWith(BASE_URL)) {
    return route.slice(BASE_URL.length);
  }

  return route;
};

render(transformRoute(window.location.pathname));

navigation.addEventListener("navigate", (event) => {
  const { url } = event.destination;
  const route = new URL(url).pathname;

  render(transformRoute(route));
});
