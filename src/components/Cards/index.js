import { html, css, LitElement } from "lit";

export const cardStyles = css`
  .box-shawdow {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    min-height: 97vh;
    height: 99.5%;
    background-color: #ffffff;
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  .grid-games {
    display: grid;
    grid-template-columns: 100%;
  }
  .box-game {
    margin-bottom: 10px;
    padding: 10px;
    background: rgb(192, 5, 120);
    color: white;
    font-weight: 900;
    text-align: center;
  }
`;

export class Navbar extends LitElement {
  static styles = [cardStyles];

  constructor() {
    super();
    this.urlApi = "https://rickandmortyapi.com/api/character/";
    this.characters = [];
  }

  async getData() {
    const response = await (await fetch(this.urlApi)).json();
    this.characters = response.results;
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this.getData();
  }

  render() {
    return html`<div class="box-shawdow">
      ${this.characters.map(
        (character) => html`
          <div class="grid-games">
            <div class="box-game">${character.name}</div>
          </div>
        `
      )}
    </div>`;
  }
}
customElements.define("my-card", Navbar);
