import { html, css, LitElement } from "lit";

export const navbarStyles = css`
  a {
    padding: 10px;
  }
`;

export class About extends LitElement {
  static styles = [];

  constructor() {
    super();
  }

  render() {
    return html`<p>This is About</p>`;
  }
}
customElements.define("my-about", About);
