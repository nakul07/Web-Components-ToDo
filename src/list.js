const template = document.createElement("template");
template.innerHTML = `
<style>
   div{
    width: 560px;
    height: 50px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f1;
    font-size: 16px;
    resize: none;
   }
   </style>
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
