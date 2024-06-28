const express = require('express');
const port = 5000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CrochetCompass API'});
});

const patternsRouter = require('./routes/patterns');
app.use('/api/patterns', patternsRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));