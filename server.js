const express = require('express');
const port = 5000;

const app = express();

const patterns = [
    {
        ytid: 1, //'aAxGTnVNJiE',
        title: 'How to Crochet for Absolute Beginners: Part 1',
        desc: 'This tutorial covers materials you will need, how to make a slip knot, crocheting a chain, and crocheting a single crochet.',
        tags: ["beginner", "stitches", "basics"]
    },
    {
        ytid: 2, //'jBj6MyMu9pU',
        title: 'How to Crochet for Absolute Beginners: Part 2',
        desc: 'This tutorial covers crocheting a half double crochet, crocheting a double crochet, and crocheting a triple crochet.',
        tags: ["beginner", "stitches", "basics"]
    },
    {
        ytid: 3, //'G76EZBVHac0',
        title: 'Crochet Basics: What To Do With Your Ends',
        desc: 'In this video I show you how to weave in the ends of blankets or other projects you are working on. Things you will need: sewing needle with a wide opening and scissors. To weave in your ends, follow the pattern of the crochet, going through the middle of the crochet- not under and over pieces, until you\'ve weaved about an inch and a half. Then pull out your needle and cut with your scissors.',
        tags: ["beginner", "basics"]
    },
];

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the CrochetCompass API'});
});

app.get('/api/patterns', (req, res) => {
    res.json({ success: true, data: patterns});
});

app.get('/api/patterns/:ytid', (req, res) => {
    const pattern = patterns.find((pattern) => pattern.ytid === +req.params.ytid);
    if(!pattern){
        return res.status(404).json({ success: false, error: 'Resource not found' });
    }
    res.json({ success: true, data: pattern });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));