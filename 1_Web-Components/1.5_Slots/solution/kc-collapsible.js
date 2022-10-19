const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>
.collapsible {
  background-color: var(--button-background-color, #777);
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
.active, .collapsible:hover {
  background-color: #555;
}
.collapsible:after {
  content: "➕";
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}
.active:after {
  content: "➖";
}
.wrapper {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
</style>
<button class="collapsible"></button>
<div class="wrapper">
  <slot></slot>
</div>
`;

class KeepcodingCollapsible extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.name = this.getAttribute('name') || 'Open Collapsible'
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const button = this.shadowRoot.querySelector('button');
    button.textContent = this.name;

    button.addEventListener('click', function () {
      this.classList.toggle('active');
      const wrapper = this.nextElementSibling;

      if(wrapper.style.maxHeight){
        wrapper.style.maxHeight = null
      }else{
        wrapper.style.maxHeight = `${wrapper.scrollHeight}px`
      }
    });
  }
}

customElements.define("keepcoding-collapsible", KeepcodingCollapsible);
