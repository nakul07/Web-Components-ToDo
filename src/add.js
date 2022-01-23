const template = document.createElement("template");
template.innerHTML = `
<style>
button{
    background-color: #4CAF50; /* Green */
    border: none;
    border-radius: 3px;
    color: white;
    padding: 10px 22px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>
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
