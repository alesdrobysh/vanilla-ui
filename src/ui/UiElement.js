export class UiElement {
  #tag;
  #element;
  #attributes = [];
  #listeners = [];
  #children = [];

  constructor(tag, attributes = [], listeners = [], children = []) {
    this.#tag = tag;
    this.#attributes = attributes;
    this.#listeners = listeners;
    this.#children = Array.isArray(children) ? children : [children];
  }

  setChildren(children) {
    this.#children = Array.isArray(children) ? children : [children];
    return this.render();
  }

  setAttributes() {
    this.#attributes.forEach((attribute) => {
      this.#element.setAttribute(attribute.name, attribute.value);
    });
  }

  id(id) {
    const idAttribute = this.#attributes.find((a) => a.name === "id") ?? {
      name: "id",
      value: "",
    };
    idAttribute.value = id;
    return this;
  }

  class(className) {
    const classAttribute = this.#attributes.find((a) => a.name === "class") ?? {
      name: "class",
      value: "",
    };
    classAttribute.value = className;
    return this;
  }

  attribute(name, value) {
    const attribute = this.#attributes.find((a) => a.name === name) ?? {
      name,
      value: "",
    };
    attribute.value = value;

    this.#attributes = this.#attributes.filter((a) => a.name !== name);
    this.#attributes.push(attribute);

    return this;
  }

  setListeners() {
    this.#listeners.forEach((listener) => {
      listener[1].forEach((fn) => {
        this.#element.addEventListener(listener[0], fn);
      });
    });
  }

  removeListeners() {
    this.#listeners.forEach((listener) => {
      listener[1].forEach((fn) => {
        this.#element.removeEventListener(listener[0], fn);
      });
    });
  }

  listen(event, fn) {
    const listeners = this.#listeners.find((l) => l[0] === event) ?? [
      event,
      [],
    ];
    listeners[1].push(fn);
    this.#listeners = this.#listeners.filter((l) => l[0] !== event);
    this.#listeners.push(listeners);

    this.#element?.addEventListener(event, fn);

    return this;
  }

  unlisten(event, fn) {
    const listener = this.#listeners.find((l) => l[0] === event);

    if (!listener) {
      return;
    }

    listener[1] = listener[1].filter((f) => f !== fn);

    this.#element?.removeEventListener(event, fn);

    return this;
  }

  remove() {
    this.removeListeners();
    this.#element.remove();
  }

  renderChildren() {
    this.#children.forEach((child) => {
      if (child instanceof UiElement) {
        this.#element.appendChild(child.render());
        return;
      }

      if (typeof child === "string") {
        this.#element.innerText = child;
        return;
      }

      throw new Error(
        `Invalid child: ${child} of type ${typeof child} at ${this.#tag}`,
      );
    });
  }

  render() {
    this.#element = this.#element ?? document.createElement(this.#tag);
    this.#element.__uiElement = this;

    this.setAttributes();
    this.setListeners();

    this.#element.innerHTML = "";
    this.renderChildren();

    return this.#element;
  }
}
