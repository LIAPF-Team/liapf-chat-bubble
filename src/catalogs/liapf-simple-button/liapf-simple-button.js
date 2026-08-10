import { Okalit, defineElement, html } from "@okalit/core";

import styles from "./liapf-simple-button.css?inline";

@defineElement({
  tag: "liapf-simple-button",
  styles: [styles],
  props: [
    { variant: { type: String, value: 'primary' } },
    { disabled: { type: Boolean, value: false } },
    { outline: { type: Boolean, value: false } },
    { onlyText: { type: Boolean, value: false } },
    { styleButton: { type: String, value: '' } },
    { styleSLot: { type: String, value: '' } },
    { circle: { type: Boolean, value: false } },
  ],
})
export class LiapfSimpleButton extends Okalit {

  _handleClick() {
    if (this.disabled.value) return;

    this.output('on:click');
  }

  render() {
    return html`
      <button
        class="${this.variant.value} ${this.outline.value ? 'outline' : ''} ${this.onlyText.value ? 'only-text' : ''} ${this.circle.value ? 'circle' : ''} ${this.disabled.value ? 'disabled' : ''}"
        style="${this.styleButton.value}"
        ?disabled="${this.disabled.value}"
        @click="${this._handleClick}"
      >
        <slot style="${this.styleSLot.value}"></slot>
      </button>
    `;
  }
}
