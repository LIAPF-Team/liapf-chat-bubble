import { Okalit, defineElement, html } from "@okalit/core";
import { nothing } from "lit";

import '@catalogs/liapf-icons/liapf-icons.js';
import '@catalogs/liapf-badge/liapf-badge.js';
import '@catalogs/liapf-simple-button/liapf-simple-button.js';

import styles from "./liapf-user-bubble.css?inline";

@defineElement({
  tag: "liapf-user-bubble",
  styles: [styles],
  props: [
    { url: { type: String, value: '' } },
    { color: { type: String, value: 'primary' } },
    { size: { type: Number, value: 4 } },
    { level: { type: Number, value: 0 } },
    { editable: { type: Boolean, value: false } },
    { square: { type: Boolean, value: false } },
  ],
})
export class LiapfUserBubble extends Okalit {
  render() {
    const backgroundColor = {
      primary: 'var(--primary-color, rgb(87, 164, 169))',
      secondary: 'var(--secondary-color, rgb(255, 111, 145))',
      warning: 'var(--warning-color, rgb(255, 204, 0))',
      black: 'var(--black-color, rgb(15, 15, 15))',
      text: 'var(--color-text, rgb(255, 255, 255))',
      grey: 'var(--grey-color, rgb(19, 19, 19))',
      green: 'var(--green-color,  rgb(105, 199, 118))',
      purple: 'var(--purple-color, rgb(113, 105, 199))',
      orange: 'var(--orange-color, rgb(255, 153, 0))',
      white: 'var(--color-text, rgb(255, 255, 255))'
    }[this.color.value] || this.color.value;

    return html`
      <div class="user-bubble-molecule ${this.square.value ? 'square' : ''}" style="background-image: url('${this.url.value}'); width: ${this.size.value}rem; height: ${this.size.value}rem; border-color: ${backgroundColor};">
        ${
          this.level > 0
            ? html`
          <liapf-badge color="secondary">
            LVL ${this.level.value < 10 ? '0' : nothing}${this.level.value > 99 ? nothing : '0'}${this.level.value}
          </liapf-badge>
        `
            : nothing
        }

        ${
          this.editable.value
            ? html`
          <liapf-simple-button circle @on:click=${() => this.output('on:edit') }>
            <liapf-icons icon="pen" size="20"></liapf-icons>
          </liapf-simple-button>
        `
            : nothing
        }
      </div>
    `;
  }
}
