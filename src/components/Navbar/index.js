import { html, css, LitElement } from "lit";

export const navbarStyles = css`
  a {
    padding: 10px;
  }
`;

export class Navbar extends LitElement {
  static styles = [navbarStyles];

  constructor() {
    super();
  }

  render() {
    return html`<nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>`;
  }
}
customElements.define("my-navbar", Navbar);