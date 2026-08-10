import { Okalit, defineElement, html } from "@okalit/core";

import styles from "./liapf-badge.css?inline";

@defineElement({
  tag: "liapf-badge",
  styles: [styles],
  props: [
    { variant: { type: String, value: "solid" } },
    { color: { type: String, value: "primary" } },
    { size: { type: Number, value: 0.7 } },
  ],
})
export class LiapfBadge extends Okalit {
  get getBadgeSolid() {
    const strokeColor = {
      primary: {
        background: 'var(--primary-color, rgb(87, 164, 169))',
        text: 'var(--color-text, rgb(255, 255, 255))',
      },
      secondary: {
        background: 'var(--secondary-color, rgb(255, 111, 145))',
        text: 'var(--color-text, rgb(255, 255, 255))',
      },
      warning: {
        background: 'var(--warning-color, rgb(255, 204, 0))',
        text: 'var(--black-color, rgb(15, 15, 15))',
      },
      black: {
        background: 'var(--black-color, rgb(15, 15, 15))',
        text: 'var(--color-text, rgb(255, 255, 255))',
      },
      text: {
        background: 'var(--color-text, rgb(255, 255, 255))',
        text: 'var(--black-color, rgb(15, 15, 15))',
      },
      grey: {
        background: 'var(--grey-color, rgb(19, 19, 19))',
        text: 'var(--color-text, rgb(255, 255, 255))',
      },
      green: {
        background: 'var(--green-color, rgb(105, 199, 118))',
        text: 'var(--black-color, rgb(15, 15, 15))',
      },
      purple: {
        background: 'var(--purple-color, rgb(113, 105, 199))',
        text: 'var(--color-text, rgb(255, 255, 255))',
      },
      orange: {
        background: 'var(--orange-color, rgb(255, 153, 0))',
        text: 'var(--color-text, rgb(255, 255, 255))',
      },
    }[this.color.value] || this.color.value;

    return html`
      <div class="badge-atomic" style="background-color: ${strokeColor.background}; color: ${strokeColor.text}; font-size: ${this.size.value}rem;">
        <slot></slot>
      </div>
    `;
  }

  get getBadgeOutline() {
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
      <div class="badge-atomic" style="border: 1px solid ${backgroundColor}; color: ${backgroundColor}; font-size: ${this.size.value}rem;">
        <div class="badge-atomic_background" style="background-color: ${backgroundColor};"></div>
        <slot></slot>
      </div>
    `;
  }

  render() {
    return this.variant.value === 'solid' ? this.getBadgeSolid : this.getBadgeOutline;
  }
}
