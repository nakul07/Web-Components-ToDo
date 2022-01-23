const template = document.createElement("template");
template.innerHTML = `
<style>
textarea{
    height: 50px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
}
</style>
<div class = "input-tasks">
<textarea id="todoIn" placeholder="Add here" rows="2" cols="50"></textarea>
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
