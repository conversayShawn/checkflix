const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
require('dotenv').config()

app.use(express.static('public'));
app.use(express.json());

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// --- API Endpoints ---

app.post('/api/login', async (req, res) => {
    await delay(200); // Simulate Auth latency
    const { email, password } = req.body;
    if (email === 'admin@checkly.com' && password === 'password123') {
        return res.json({ success: true, token: 'fake-jwt-123', user: 'Checkly Hero' });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/api/movies', async (req, res) => {
    await delay(100);
    res.json([
        { id: 1, title: "The Architect", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
        { id: 2, title: "Checkly: The Movie", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" }
    ]);
});

app.post('/api/checkout', async (req, res) => {
    console.log("💳 Processing Checkout Trace...");
    await delay(500); // Simulated Payment Processing Span
    
    // Controlled failure for your demo
    if (Math.random() > 0.7) {
        return res.status(502).json({ error: "Upstream Payment Provider Timeout" });
    }
    res.json({ success: true, confirmation: 'NET-' + Math.random().toString(36).toUpperCase().substring(2, 10) });
});

const HEARTBEAT_URL = 'https://ping.checklyhq.com/d41bbf3e-ec4c-4b0b-89bd-a773577a7b3c';

function sendHeartbeat() {
    axios.get(HEARTBEAT_URL)
        .then(() => console.log('💓 Heartbeat sent to Checkly'))
        .catch(err => console.error('💔 Heartbeat failed:', err.message));
}

app.listen(3000, () => {
    console.log('🎬 Checkflix Clone running: http://localhost:3000');
    
    // Send initial heartbeat on startup
    sendHeartbeat(); 
    
    // Ping every 4 minutes (must be less than your 5-minute period)
    setInterval(sendHeartbeat, 4 * 60 * 1000); 
});

app.listen(3000, () => console.log('🎬 Checkflix Clone running: http://localhost:3000'));