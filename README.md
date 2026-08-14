# LiapfChatBubble

A component description

## Installation

```bash
okalit add liapf-chat-bubble --registry github.com/LIAPF-Team/liapf-chat-bubble
```

Or manually copy to your project:

```bash
# The component will be installed in src/catalogs/liapf-chat-bubble/
```

## Usage

```js
import '@catalogs/liapf-chat-bubble/liapf-chat-bubble.js';
```

```html
<liapf-chat-bubble
  variant="room"
  name="Username"
  url="https://okalit.com/okalit.png"
  lastMessage="Lorem ipsum dolor sit amet"
  time="10:30 AM"
  description="This is a description of the chat bubble component and its functionality. Because it is a room bubble, it will display the server name and connected count."
  server-name="Server name"
  connected-count="30"
  @on:click="${handler}"
></liapf-chat-bubble>
```

## Props

| Name | Type | Default |
|------|------|---------|
| `variant` | `String` | `"room"` |
| `name` | `String` | `"Username"` |
| `url` | `String` | `"https://okalit.com/okalit.png"` |
| `lastMessage` | `String` | `"Lorem ipsum dolor sit amet"` |
| `time` | `String` | `"10:30 AM"` |
| `description` | `String` | `"This is a description of the chat bubble component and its functionality. Because it is a room bubble, it will display the server name and connected count."` |
| `server-name` | `String` | `"Server name"` |
| `connected-count` | `Number` | `30` |

## Events

| Name |
|------|
| `on:click` |

## License

MIT
