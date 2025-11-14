# Biz Agent Hub – JavaScript SDK

The **Biz Agent Hub JavaScript SDK** provides a simple way to integrate Biz Agent Hub agents (such as Supportbot Elite) into your Node.js or browser applications.

With this SDK, you can:

- Initialize a `BizAgentHub` client with your credentials
- Interact with **Supportbot Elite** via a simple `query()` API
- Send messages and optional files (for example, images) to the bot
- Use the SDK from both **TypeScript** and **JavaScript**

---

## Installation
```bash
npm install biz-agent-hub
```
or with Yarn:
```bash
yarn add biz-agent-hub
```

---

## Quick Start
### ES Modules / TypeScript
```typescript
import { BizAgentHub } from 'biz-agent-hub';
const userId = '<your_user_id>'; 
const apiKey = '<your_api_key>';
const client = new BizAgentHub(userId, apiKey);

async function run() { 
  const response = await client.supportbotElite.query({ 
    message: 'Hello Supportbot Elite!', 
    file: undefined, // Optional: a File object (browser) or compatible type 
    sessionId: undefined // Optional: reuse a session ID for conversation continuity 
  });

  console.log('Supportbot Elite response:', response); 
}

run().catch(console.error);
```
### CommonJS / JavaScript
```javascript
const { BizAgentHub } = require('biz-agent-hub');
const userId = '<your_user_id>';
const apiKey = '<your_api_key>';
const client = new BizAgentHub(userId, apiKey);

(async () => {
    const response = await client.supportbotElite.query({
        message: 'Hello Supportbot Elite!',
        file: undefined,
        sessionId: undefined
    });

    console.log('Supportbot Elite response:', response);
})();
```

---

## API Reference
`BizAgentHub`
```typescript
new BizAgentHub(userId: string, apiKey: string)
```
Creates an instance of the Biz Agent Hub client.

* `userId` – Your Biz Agent Hub user identifier.

* `apiKey` – Your API key for authentication.

### Properties

* `supportbotElite: SupportbotElite`

    Interface for interacting with the Supportbot Elite agent.

---
`SupportbotElite`

`query(options: SupportbotEliteQuery): Promise<any>`

Send a message (and optional file) to Supportbot Elite.

```typescript
interface SupportbotEliteQuery { 
  /** The user message or question for Supportbot Elite. */ 
  message: string;

  /**
   * - Optional file to send to the bot.
   * - In the browser, this should be a `File` object.
   * - In Node.js, you can use a compatible form-data file type depending on your setup. 
   */ 
  file?: File;

  /**
   * - Optional session ID.
   * - Use this to maintain conversation context between multiple messages. 
   */ 
  sessionId?: string; 
}
```
### Example:
```typescript
const result = await client.supportbotElite.query({ 
  message: 'What is the main color in this image?', 
  file: imageFile, // e.g. from an <input type="file"> or Node.js equivalent
  sessionId: 'my-session-id-123', // optional but recommended for multi-turn conversations 
});

console.log(result);
```
---
## Error Handling
The `query()` method throws an error when the underlying HTTP request fails or the server responds with an error status.
```typescript
try { 
  const response = await client.supportbotElite.query({ 
    message: 'Help me with my issue.', 
    file: undefined, 
    sessionId: undefined, 
  });

  console.log('Response:', response); 
} catch (err) { 
  console.error('Supportbot Elite query failed:', err); 
}
```
---
## TypeScript Support
This SDK is written in TypeScript and ships with type declarations:

* Strong typing for `BizAgentHub`, `SupportbotElite`, and `SupportbotEliteQuery`

* Works out of the box with TypeScript projects

No additional configuration is required; just import and use.

---
## Building From Source
If you are working on the SDK locally:
```bash
# Install dependencies
npm install
# Build TypeScript -> dist/
npm run build
```
The compiled JavaScript and type declarations will be emitted into the `dist` directory.

---
## Support
If you encounter problems or have questions:

* Open an issue in the GitHub repository

* Include:

   * Your Node.js version

   * The `biz-agent-hub` version

   * A minimal code sample that reproduces the issue

This helps us diagnose and resolve problems quickly.
