import { Okalit, defineElement, html } from "@okalit/core";
import { svg } from 'lit';

import styles from "./liapf-icons.css?inline";

const ICONS = {
  document: svg`
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  `,
  home: svg`
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  `,
  message: svg`
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  `,
  heart: svg`
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  `,
  search: svg`
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  `,
  google: svg`
    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  `,
  discord: svg`
    <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
  `,
  gridHome: svg`
    <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
  `,
  compass: svg`
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  `,
  chatBubble: svg`
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5A8.48 8.48 0 0 1 21 11v.5z"></path>
  `,
  profile: svg`
    <circle cx="12" cy="8" r="4"></circle>
    <path d="M4 21a8 8 0 0 1 16 0"></path>
  `,
  devil: svg`
    <path
      fill="currentColor"
      stroke="none"
      d="M7.1 8.7C5.85 6.45 6.3 3.75 8.65 1.85c.35-.28.87.02.8.47-.33 2.12.24 3.95 1.55 5.14A8.2 8.2 0 0 1 12 7.4c.34 0 .67.02 1 .06 1.31-1.19 1.88-3.02 1.55-5.14-.07-.45.45-.75.8-.47 2.35 1.9 2.8 4.6 1.55 6.85A8.3 8.3 0 0 1 20 15c0 4.05-3.58 7-8 7s-8-2.95-8-7a8.3 8.3 0 0 1 3.1-6.3Z"
    />
    <path
      fill="var(--page-background, #000)"
      stroke="none"
      d="M12 10.15c-3.35 0-6.05 2.13-6.05 4.76S8.65 19.67 12 19.67s6.05-2.13 6.05-4.76-2.7-4.76-6.05-4.76Z"
    />
    <rect
      x="8.7"
      y="13"
      width="1.15"
      height="2.65"
      rx=".58"
      fill="currentColor"
      stroke="none"
    />
    <rect
      x="14.15"
      y="13"
      width="1.15"
      height="2.65"
      rx=".58"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M11.2 16.9c.2.45.48.67.8.67s.6-.22.8-.67"
      fill="none"
      stroke="currentColor"
      stroke-width=".7"
      stroke-linecap="round"
    />
  `,
  info: svg`
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  `,
  alertTriangle: svg`
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  `,
  alertCircle: svg`
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  `,
  notification: svg`
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  `,
  survey: svg`
    <line x1="6" y1="5" x2="6" y2="19"></line>
    <line x1="9" y1="7" x2="18" y2="7"></line>
    <line x1="9" y1="11" x2="18" y2="11"></line>
    <line x1="9" y1="15" x2="18" y2="15"></line>
    <line x1="9" y1="19" x2="18" y2="19"></line>
  `,
  pen: svg`
    <path d="M11 9L7 11C6 14 5 17 5 19C7 19 10 18 13 17L15 13Z"></path>
    <path d="M13 7L18 2L22 6L17 11"></path>
    <line x1="5" y1="19" x2="10" y2="14"></line>
    <circle cx="11" cy="13" r="1"></circle>
  `,
  phone: svg`
    <rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="5" x2="12" y2="5"></line>
    <line x1="10" y1="19" x2="14" y2="19"></line>
    <path d="M12 9v6m-3-3h6"></path>
  `,
  arrowLeft: svg`
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  `,
  link: svg`
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  `,
  settings: svg`
    <line x1="4" y1="21" x2="4" y2="14"></line>
    <line x1="4" y1="10" x2="4" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="3"></line>
    <line x1="20" y1="21" x2="20" y2="16"></line>
    <line x1="20" y1="12" x2="20" y2="3"></line>
    <line x1="1" y1="14" x2="7" y2="14"></line>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="17" y1="16" x2="23" y2="16"></line>
  `,
  send: svg`
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  `,
  checkCircle: svg`
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  `,
  picture: svg`
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  `,
};

@defineElement({
  tag: "liapf-icons",
  styles: [styles],
  props: [
    { icon: { type: String, value: 'document' } },
    { color: { type: String, value: 'text' }},
    { size: { type: String, value: '24' }}
  ],
})
export class LiapfIcons extends Okalit {
  render() {
    const iconContent = ICONS[this.icon.value];
    const strokeColor = {
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke=${strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        width=${this.size.value}
        height=${this.size.value}
        @click="${() => this.output('on:click')}"
      >
        ${iconContent}
      </svg>
    `;
  }
}
