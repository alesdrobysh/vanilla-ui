import ui from "./ui";
import { TabState } from "./state";
import "./counter";
import { counter } from "./counter";

const { div, button, i, b } = ui;
const tabState = new TabState(["tab1", "tab2", "tab3"]);

const Tabs = () => {
  const tabs = tabState.tabs.map((tab) =>
    button(tab).listen("click", () => tabState.setActiveTab(tab)),
  );

  return div(tabs);
};

const TabContent = () => {
  const content = div();

  const setContent = () => {
    const tab = tabState.activeTab;

    if (tab === "tab1") {
      content.setChildren(counter());
    }

    if (tab === "tab2") {
      content.setChildren(b("Tab 2 content"));
    }

    if (tab === "tab3") {
      content.setChildren(i("Lorem ipsum dolor sit amet"));
    }
  };

  tabState.addEventListener("change", setContent);

  setContent(tabState.activeTab);

  return content;
};

const App = () => {
  return div([Tabs(), TabContent()]);
};

document.querySelector("#root").appendChild(App().render());
