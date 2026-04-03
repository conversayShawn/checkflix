const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// --- API Endpoints ---

app.post('/api/login', async (req, res) => {
    await delay(200);
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
    console.log("Processing Checkout Trace...");
    await delay(500);

    if (Math.random() > 0.7) {
        return res.status(502).json({ error: "Upstream Payment Provider Timeout" });
    }
    res.json({ success: true, confirmation: 'NET-' + Math.random().toString(36).toUpperCase().substring(2, 10) });
});

// Only start the server when running locally (not on Vercel)
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Checkflix Clone running: http://localhost:${PORT}`);
    });
}

module.exports = app;
