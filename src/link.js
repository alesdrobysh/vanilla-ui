import ui from "./ui";

export const Link = (text, href) => {
  return ui
    .a(text)
    .attribute("href", href)
    .listen("click", (event) => {
      event.preventDefault();
      window.history.pushState({}, "", href);
    });
};
