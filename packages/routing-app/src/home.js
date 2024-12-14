import ui from "ui";
import { counter } from "./counter";
import { Link } from "./link";

export const Home = () => {
  return ui.div([
    ui.h1("Home"),
    ui.p("Welcome to my simple UI library!"),
    Link("About", "/about"),
    ui.br(),
    ui.hr(),
    ui.p("Web component example below"),
    counter(),
  ]);
};
