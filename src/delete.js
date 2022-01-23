const template = document.createElement("template");
template.innerHTML = `
<div class = "delete-btn">
    <button id = "delete">&times</button>
</div>

`;
export class deleteBtn extends HTMLElement {
  constructor() {
    super();
    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define(`delete-btn`, deleteBtn);
