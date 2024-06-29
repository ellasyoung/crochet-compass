const mongoose = require('mongoose');

const PatternSchema = new mongoose.Schema({
    ytid: {
        type: String,
        required: [true, 'Please add a ytid']
    },
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    desc: {
        type: String,
        default: ''
    },
    tags: {
        type: [String],
        required: [true, 'Please add at least one tag']
    }
});

module.exports = mongoose.model('Pattern', PatternSchema);