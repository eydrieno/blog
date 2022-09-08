const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    content: {
        type: String,
        required: [true, 'content is required']
    },
    date: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: String,
        required: [true, 'content is required']
    }
})

module.exports = mongoose.model('Post', PostSchema);