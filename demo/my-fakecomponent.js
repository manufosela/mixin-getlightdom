import { html, css, LitElement } from 'lit';
import {MixinGetLightDom } from "../mixin-getlightdom.js";

export class MyFakecomponent extends MixinGetLightDom(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-fakecomponent-text-color, #000);
      }
      .element {
        font-size: 1.2em;
        background: #FF7900;
        color: #FF3;
        padding: 1rem;
        margin:1rem;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    this.list = [];
  }

  connectedCallback() {
    super.connectedCallback();
    
    /** this._HTMLChildren(); 
     *  returns an object with all lightdom childrens that matches the HTML tags in the list HTMLAttributesToExtract
     */
    const childNodes = this._HTMLChildren();

    this.list = childNodes.miLista;
  }

  __increment() {
    this.counter += 1;
  }

  /** return an array to be rendered. If not, it won't render the children */
  __processLightDomChildren(list) {
    let HTMLlightDom = [];
    if (!Array.isArray(list) && typeof list === 'object') {
      const keysList = Object.keys(list);
      keysList.forEach((item) => { 
        HTMLlightDom.push(html`<p class="element" id="element_${item}">${list[item].content}</p>`);
      });
    } else if (Array.isArray(list)) {
      HTMLlightDom.push(html`<p class='element' id="element_${index}">${item}</p>`);
    }
    return HTMLlightDom;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <main>
        ${this.__processLightDomChildren(this.list)}
      </main>
    `;
  }
}

window.customElements.define('my-fakecomponent', MyFakecomponent);