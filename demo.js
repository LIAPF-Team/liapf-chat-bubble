import '@okalit/demo-components';
import './src/liapf-chat-bubble.js';

const demo = document.querySelector('#demo');

demo.setComponents([
  {
    name: 'LiapfChatBubble',
    tag: 'liapf-chat-bubble',
    description: 'A component description',
    import: () => import('./src/liapf-chat-bubble.js'),
    props: [
      { variant: { type: String, value: 'chat' } },
      { name: { type: String, value: 'Username' } },
      { url: { type: String, value: 'https://okalit.com/okalit.png' } },
      { lastMessage: { type: String, value: 'Lorem ipsum dolor sit amet' } },
      { time: { type: String, value: '10:30 AM' } },
      { 'server-name': { type: String, value: 'Server name' } },
      { 'connected-count': { type: Number, value: 30 } },
    ],
    slots: [],
    events: ['on:click'],
    channels: [],
  },
]);
