const express = require('express');
const router = express.Router();
const Pattern = require('../models/Pattern');
const cors = require('cors')({origin: true});

// CORS configuration
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Get all patterns or search patterns
router.get('/', async (req, res) => {
    const { search } = req.query;
    let patterns;
    try {
      if (search) {
        patterns = await Pattern.find({
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { tags: { $in: [new RegExp(search, 'i')] } }
          ]
        });
      } else {
        patterns = await Pattern.find();
      }
      res.json(patterns);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
});

// Get all patterns with a specific tag
router.get('/tags', async (req, res) => {
  const { tag } = req.query;
  let patterns;
  try {
    if (tag) {
      patterns = await Pattern.find({ tags: { $regex: new RegExp(tag, 'i') } });
    } else {
      patterns = await Pattern.find();
    }
    res.json(patterns);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
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