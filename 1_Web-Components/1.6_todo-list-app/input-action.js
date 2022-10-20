const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>

    input {
        text-align: var(--input-value-position, center)
    }

</style>

<div class="input-action-wrapper">
  <input type="text">
  <button></button>
</div>

`;


class InputAction extends HTMLElement {
  constructor() {
    super();
    this.icon = this.getAttribute('icon') || '➕';
    this.placeholder = this.getAttribute('placeholder') || 'Add new todo'
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const buttonElement = this.shadowRoot.querySelector('button');
    buttonElement.textContent = this.icon;
    this.shadowRoot.querySelector('input').placeholder = this.placeholder;

    buttonElement.addEventListener('click', () => {
        this.emitSendTextEvent()
    });
  }

  emitSendTextEvent() {

    const inputElement =  this.shadowRoot.querySelector('input');

    if(inputElement.value) {
         // CustomEvents
        const event = new CustomEvent('sendText', {
            detail: inputElement.value //valor del input
        })
         //dispatchEvent
        this.dispatchEvent(event)
        inputElement.value = "";
        }

   
  }
}

customElements.define("input-action", InputAction);


export const cositas = 4