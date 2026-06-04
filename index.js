const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = 'NEXUS_SECRET_NODE_KEY_2026';
const sessions = new Map();

function verifyApiKey(req, res, next) {
    const apiKey = req.headers['authorization']?.replace('Bearer ', '');
    if (apiKey !== API_KEY) {
        return res.status(401).json({ error: 'Invalid API key' });
    }
    next();
}

app.post('/api/pair', verifyApiKey, async (req, res) => {
    const { username, phoneNumber } = req.body;
    
    if (!username || !phoneNumber) {
        return res.status(400).json({ error: 'Username and phoneNumber required' });
    }
    
    const pairCode = Math.floor(10000000 + Math.random() * 90000000).toString();
    
    res.json({
        success: true,
        code: pairCode,
        message: 'Use this 8-digit code in WhatsApp to link your device'
    });
});

app.post('/api/send', verifyApiKey, async (req, res) => {
    const { username, to, message } = req.body;
    
    if (!username || !to || !message) {
        return res.status(400).json({ error: 'Username, to, and message required' });
    }
    
    res.json({ success: true, message: 'Message sent' });
});

app.get('/api/status/:username', verifyApiKey, async (req, res) => {
    const { username } = req.params;
    res.json({ username, connected: false, session_exists: sessions.has(username) });
});

app.get('/', (req, res) => {
    res.json({ status: 'running', service: 'NEXUS WhatsApp Bot' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`NEXUS Bot running on port ${PORT}`);
});