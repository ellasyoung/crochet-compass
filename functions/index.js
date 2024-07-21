const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
    origin: 'https://crochetcompass.web.app' 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CrochetCompass API' });
});

// Import and use your routes
const patternsRouter = require('./routes/patterns');
app.use('/api/patterns', patternsRouter);

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
