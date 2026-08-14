import '@okalit/demo-components';
import './src/liapf-chat-bubble.js';

const demo = document.querySelector('#demo');

demo.setComponents([
  {
    name: 'LiapfChatBubble',
    tag: 'liapf-chat-bubble',
    description: 'A chat bubble component that displays user information, last message, and time.',
    import: () => import('./src/liapf-chat-bubble.js'),
    props: [
      { variant: { type: String, value: 'room' } },
      { name: { type: String, value: 'Username' } },
      { url: { type: String, value: 'https://okalit.com/okalit.png' } },
      { lastMessage: { type: String, value: 'Lorem ipsum dolor sit amet' } },
      { time: { type: String, value: '10:30 AM' } },
      { description: { type: String, value: 'This is a description of the chat bubble component and its functionality. Because it is a room bubble, it will display the server name and connected count.' } },
      { 'server-name': { type: String, value: 'Server name' } },
      { 'connected-count': { type: Number, value: 30 } },
    ],
    slots: [],
    events: ['on:click'],
    channels: [],
  },
]);
