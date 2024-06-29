const express = require('express');
const router = express.Router();
const Pattern = require('../models/Pattern');

/*const patterns = [
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
];*/

// Get all patterns
router.get('/', async (req, res) => {
    try{
        const patterns = await Pattern.find();
        res.json({ success: true, data: patterns });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
});

// Get a specific pattern by ytid
router.get('/:ytid', async (req, res) => {
    try{
        const pattern = await Pattern.findOne({ ytid: req.params.ytid });
        if (!pattern) {
        return res.status(404).json({ message: 'Pattern not found' });
        }
        res.json({ success: true, data: pattern });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
});

module.exports = router;