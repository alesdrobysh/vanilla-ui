import { Link } from "./link";
import ui from "./ui";

export const About = () => {
  return ui.div([
    ui.h1("About"),
    ui.p(
      "This is a simple UI library that I'm building to learn how to create web components.",
    ),
    Link("Home", "/"),
  ]);
};
