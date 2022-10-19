/*
  1- Create a digital-clock component.
  2- Each second, we must calculate the time and update the component HTML
*/
const templateElement = document.createElement('template');

templateElement.innerHTML = `
<style>
h1 {
  color: var(--digital-clock-color, blue);
}
</style>
<p></p>
<h1></h1>
`



class DigitalClock extends HTMLElement {
  constructor() {
      super();
      this.example = this.getAttribute('example')
      this.attachShadow({mode: "open"})
  }

  connectedCallback() {

    const template = templateElement.content.cloneNode(true)
    const currentTime = this.calculateCurrentTime();

    template.querySelector('h1').textContent =  currentTime;
    template.querySelector('p').textContent = this.example;

    this.shadowRoot.appendChild(template)

      setInterval(() => {
          const currentTime = this.calculateCurrentTime();
          this.shadowRoot.querySelector('h1').textContent =  currentTime;
      }, 1000)
  }

  calculateCurrentTime() {
      const now = new Date();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if(hours < 10) {
          hours = `0${hours}`
      }

      if(minutes < 10) {
          minutes = `0${minutes}`
      }
      if(seconds < 10) {
          seconds = `0${seconds}`
      }

      const clockTime = `${hours}:${minutes}:${seconds}`;

      return clockTime;
  }
}

window.customElements.define('digital-clock', DigitalClock);