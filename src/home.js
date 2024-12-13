import { counter } from "./counter";
import { Link } from "./link";
import ui from "./ui";

export const Home = () => {
  return ui.div([
    ui.h1("Home"),
    ui.p("Welcome to my simple UI library!"),
    Link("About", "/about"),
    ui.br(),
    ui.hr(),
    ui.p("web component example below"),
    counter(),
  ]);
};
