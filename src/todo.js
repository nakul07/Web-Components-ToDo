const template = document.createElement("template");
template.innerHTML = `
<style>
h3{
    color: green;
    font-size: 25px;
}
</style>
<div class = "todo-app">

    <h3></h3>
   

</div>

`;

import { addBtn } from "./add.js";
import { deleteBtn } from "./delete.js";
import { inputTasks } from "./input.js";
import { listItems } from "./list.js";

class todoApp extends HTMLElement {
  constructor() {
    super();
    this.count = -1;
    this.addBtn = new addBtn();
    this.textArea = new inputTasks();
    //array
    this.tasks = [];
    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.appendChild(this.textArea);
    this.shadowRoot.appendChild(this.addBtn);
  }

  addItems() {
    if (this.textArea.shadowRoot.querySelector("#todoIn").value == "") {
      alert("Empty Field");
      return;
    }
    this.tasks.push([this.textArea.shadowRoot.querySelector("#todoIn").value]);
    this.count++;
    let list = new listItems();
    list.shadowRoot.querySelector("div").innerHTML = this.tasks[this.count];
    this.shadowRoot.appendChild(list);
    let deleteBtn1 = new deleteBtn();
    this.shadowRoot.appendChild(deleteBtn1);
    this.textArea.shadowRoot.querySelector("#todoIn").value = "";

    deleteBtn1.addEventListener("click", () => {
      list.style.display = "none";
      deleteBtn1.style.display = "none";
    });
  }

  connectedCallback() {
    this.addBtn.addEventListener("click", () => this.addItems());
  }
}

window.customElements.define(`todo-app`, todoApp);
