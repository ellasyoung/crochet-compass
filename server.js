const express = require('express');
require('dotenv').config();

const cors = require('cors');

const port = process.env.PORT || 5001;
const connectDB = require('./config/db');

connectDB();

const app = express();  

// Middleware
app.use(cors());
app.use(express.json());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CrochetCompass API'});
});

const patternsRouter = require('./routes/patterns');
app.use('/api/patterns', patternsRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));