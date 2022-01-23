const template = document.createElement("template");
template.innerHTML = `
<div class = "add-btn">
    <button id = "add">Add</button>
</div>

`;
export class addBtn extends HTMLElement {
  constructor() {
    super();
    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define(`add-btn`, addBtn);
