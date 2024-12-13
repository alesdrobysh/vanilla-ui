export class TabState extends EventTarget {
  constructor(tabs) {
    super();
    this.tabs = tabs;
    this.activeTab = tabs[0];
  }

  setActiveTab = (tab) => {
    this.activeTab = tab;
    this.dispatchEvent(new CustomEvent("change"));
  };
}
