const template = document.createElement("template");
template.innerHTML = `
<style>
    button{
    background-color:red;
    border: none;
    border-radius: 3px;
    color: white;
    padding: 10px 22px;
    text-align: center;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    }
    button:hover{
        background-color: #660000;
    }
</style>
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
