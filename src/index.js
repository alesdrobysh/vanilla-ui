import ui from "./ui";
import { Home } from "./home";
import { About } from "./about";

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

render(window.location.pathname);

navigation.addEventListener("navigate", (event) => {
  const { url } = event.destination;
  const route = new URL(url).pathname;
  render(route);
});
