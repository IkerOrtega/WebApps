var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    id: String,
    title: String,
    body: String
});

module.exports = mongoose.model('Post',PostSchema);