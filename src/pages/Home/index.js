import { html, LitElement } from "lit";
import "../../components/Cards";

export class Home extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<div>
      <my-card></my-card>
    </div>`;
  }
}
customElements.define("my-home", Home);
