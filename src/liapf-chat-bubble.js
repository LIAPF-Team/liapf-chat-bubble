import { Okalit, defineElement, html } from "@okalit/core";

import '@catalogs/liapf-user-bubble/liapf-user-bubble.js';
import '@catalogs/liapf-badge/liapf-badge.js';

import styles from "./liapf-chat-bubble.css?inline";
import { nothing } from "lit";

@defineElement({
  tag: "liapf-chat-bubble",
  styles: [styles],
  props: [
    { variant: { type: String, value: 'chat' } },
    { name: { type: String, value: '' } },
    { url: { type: String, value: '' } },
    { lastMessage: { type: String, value: '' } },
    { time: { type: String, value: '' } },
    { serverName: { type: String, value: '' } },
    { connectedCount: { type: Number, value: 0 } },
    { description: { type: String, value: '' } },
  ],
})
export class LiapfChatBubble extends Okalit {
  _onClick() {
    this.output('on:click');
  }

  get getChatTemplate() {
    return html`
      <div class="chat-avatar">
        <liapf-user-bubble 
          url="${this.url.value}" 
          size="3.2" 
          color="${this.variant.value === 'room' ? 'secondary' : 'primary'}"
          ?square="${this.variant.value === 'room'}">
        </liapf-user-bubble>
      </div>

      <div class="chat-content">
        <div class="chat-header">
          <span class="chat-name">${this.name.value}</span>
          <span class="chat-time">${this.time.value}</span>
        </div>
        <p class="chat-last-message">${this.lastMessage.value}</p>
      </div>
    `;
  }

  get getRoomTemplate() {
    return html`
      <div class="chat-content room-content">
        <div class="chat-header">
          <span class="chat-name">${this.name.value}</span>
        </div>

        <div class="chat-description">
          <span class="chat-name">${this.description.value}</span>
        </div>

        <div class="chat-badges">
          ${
            this.serverName.value
              ? html`<liapf-badge variant="solid" color="primary" size="0.65">${this.serverName.value}</liapf-badge>`
              : nothing
          }
          <liapf-badge variant="outline" color="rgb(105, 199, 118)" size="0.65">
            ${this.connectedCount.value} conectados
          </liapf-badge>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div
        class="chat-bubble-molecule variant-${this.variant.value} ${this.variant.value}"
        @click="${this._onClick}"
        style="${this.variant.value === 'room' ? 'background-image: url("' + this.url.value + '")' : nothing}"
      >
        ${this.variant.value === 'room' ? this.getRoomTemplate : this.getChatTemplate}
      </div>
    `;
  }
}
