import ui from "ui";
import { BASE_URL } from "./config";

export const Link = (text, href) => {
  const hasBaseUrl = window.location.pathname.startsWith(BASE_URL);
  const fullHref = hasBaseUrl ? `${BASE_URL}${href}` : href;

  return ui
    .a(text)
    .attribute("href", fullHref)
    .listen("click", (event) => {
      event.preventDefault();
      window.history.pushState({}, "", fullHref);
    });
};
