const template = document.createElement("template");
template.innerHTML = `
<div class = "input-tasks">
<textarea id="todoIn" name="" rows="2" cols="50">Add here</textarea>
</div>

`;
export class inputTasks extends HTMLElement {
  constructor() {
    super();
    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define(`input-tasks`, inputTasks);