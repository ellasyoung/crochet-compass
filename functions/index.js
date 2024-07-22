const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crochetcompass-default-rtdb.firebaseio.com"
});

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors( {origin: true} ));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Main Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CrochetCompass API'});
});


// Route to get patterns
const patternsRouter = require('./routes/patterns');
app.use('/api/patterns', patternsRouter);

// Exports the API to Firebase Cloud Functions
exports.app = functions.https.onRequest(app);