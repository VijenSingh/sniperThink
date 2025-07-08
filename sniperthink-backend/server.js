const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.get('/api/slides', (req, res) => {
  const slides = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/slides.json'), 'utf8'));
  res.json(slides);
});

app.get('/api/features', (req, res) => {
  const features = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/features.json'), 'utf8'));
  res.json(features);
});

app.get('/api/pricing', (req, res) => {
  const pricing = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/pricing.json'), 'utf8'));
  res.json(pricing);
});

app.get('/api/insights', (req, res) => {
  const insights = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/insights.json'), 'utf8'));
  res.json(insights);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Submission:', { name, email, message });
  res.json({ message: 'Form submitted successfully' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});