/*
  1- Create a digital-clock component.
  2- Each second, we must calculate the time and update the component HTML
*/
class DigitalClock extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.calculateCurrentTime()

        setInterval(() => {
            this.calculateCurrentTime()
        }, 1000)
    }

    calculateCurrentTime() {
        const now = new Date();

        const hours = now.getHours();
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

        this.innerHTML = clockTime;
    }
}

window.customElements.define('digital-clock', DigitalClock);