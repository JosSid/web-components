const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>
    div {
        border: solid grey 2px;
        background-color: var(--item-background-color, whitesmoke);
        border-radius: 10px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

</style>

<div class="list-item-wrapper">
  <span></span>
  <button>❌</button>
</div>

`;

class ListItem extends HTMLElement {
  constructor() {
    super();
    if(!this.getAttribute('text')){
        this.remove()
    }else {
        this.text = this.getAttribute('text')
    }
      
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const spanElement = this.shadowRoot.querySelector('span');
    spanElement.textContent = this.text;

    const buttonElement = this.shadowRoot.querySelector('button');
    buttonElement.addEventListener('click', () => {
        const event = new CustomEvent('removeItem')

        this.dispatchEvent(event)
        const father = this.parentNode
        father.remove();
    });
  }
}

customElements.define("list-item", ListItem);
