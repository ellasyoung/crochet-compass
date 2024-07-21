const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

connectDB();

const app = express();

// CORS configuration
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', cors(corsOptions), async (req, res) => {
    res.json({ message: 'Welcome to the CrochetCompass API'});
});

const patternsRouter = require('./routes/patterns');
app.use('/api/patterns', patternsRouter);

exports.api = functions.https.onRequest(app);
