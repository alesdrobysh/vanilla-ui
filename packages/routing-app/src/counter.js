import ui, { UiElement } from "ui";

const { div, button } = ui;

customElements.define(
  "counter-element",
  class extends HTMLElement {
    constructor() {
      super();

      this.value = 0;
      this.output = div(`Counter: ${this.value}`);
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.root = this.attachShadow({ mode: "closed" });
      this.root.append(
        div([
          button("Increment counter").listen("click", this.increment),
          this.output,
        ]).render(),
      );
    }

    increment = () => {
      this.value += 1;
      this.output.setChildren(`Counter: ${this.value}`);
    };
  },
);

export const counter = (...args) => new UiElement("counter-element", ...args);
