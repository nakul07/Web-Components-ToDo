const template = document.createElement("template");
template.innerHTML = `
<div class = "todo-app">

    <h3></h3>
    <textarea id="todoIn" name="" rows="2" cols="50">write here your tasks</textarea>
    <button id = "add">Add</button>
    <div id = "items"></div>

</div>

`;

class todoApp extends HTMLElement {
  constructor() {
    super();

    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }

  addItems() {
    if (this.shadowRoot.querySelector("#todoIn").value !== null) {
      const items = document.createElement("div");
      items.innerText = this.shadowRoot.querySelector("#todoIn").value;
      this.shadowRoot.appendChild(items);
    }else{
        console.log("null")
    }
    // this.shadowRoot.querySelector("#items").innerText = this.shadowRoot.querySelector("#todoIn").value;
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#add")
      .addEventListener("click", () => this.addItems());
  }
}
window.customElements.define(`todo-app`, todoApp);
