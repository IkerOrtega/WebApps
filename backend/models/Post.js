var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date,
    sdate: String,
    autor: String
});

module.exports = mongoose.model('Post',PostSchema);