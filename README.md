# ⚡ NEXUS WhatsApp Bot

Multi-tenant WhatsApp automation bot with group moderation, anti-link protection, and automated welcome messages.

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/pair` | Generate 8-digit pairing code |
| POST | `/api/send` | Send WhatsApp message |
| GET | `/api/status/:username` | Check bot status |
| GET | `/` | Health check |

## 🔧 Authentication

Include API key in headers:
```
Authorization: Bearer NEXUS_SECRET_NODE_KEY_2026
```

## 📦 Deployment

### Deploy to Render (Free & Always On)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com)
3. Click **New → Web Service**
4. Connect your GitHub repo
5. Set:
   - Build Command: `npm install`
   - Start Command: `node index.js`
6. Click **Create Web Service**

### Run Locally

```bash
npm install
npm start
```

## 📁 Files

- `index.js` - Main application
- `package.json` - Dependencies

## 🔑 API Key

`NEXUS_SECRET_NODE_KEY_2026`

## 📝 License

MIT
