const template = document.createElement("template");
template.innerHTML = `
<div class = "list-items">
   
    <div id = "list"></div>
</div>

`;
export class listItems extends HTMLElement {
  constructor() {
    super();
    //shadow dom
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define(`list-items`, listItems);
