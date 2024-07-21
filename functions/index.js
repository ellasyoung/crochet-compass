const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'https://crochetcompass.web.app' 
}));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CrochetCompass API' });
});

const patternsRouter = require('./routes/patterns');
app.use('/api/patterns', patternsRouter);

exports.api = functions.https.onRequest(app);
