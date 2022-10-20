import './input-action.js';
import './list-item.js';

const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>


</style>

<div class="items-list-app-wrapper">
  <h2></h2>
  <h3>No tienes tareas aún</h3>
  <div class="todos-wrapper">
  </div>
  <input-action icon="🔎"></input-action>
</div>

`;

class ItemsListApp extends HTMLElement {
  constructor() {
    super();

    this.title = this.getAttribute('title') || "Today's Tasks"
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    this.shadowRoot.querySelector('h2').textContent = this.title;

    this.shadowRoot.querySelector('input-action').addEventListener('sendText', (event) => {
        this.addNewItem(event.detail)
    });
  }

  addNewItem(itemText) {
    const divElement = document.createElement('div');
    divElement.innerHTML = `<list-item text="${itemText}"></list-item>`

    
    this.shadowRoot.querySelector('.todos-wrapper').appendChild(divElement);
  }
}

customElements.define("items-list-app", ItemsListApp);
