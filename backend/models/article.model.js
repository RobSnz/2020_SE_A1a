const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleScheme = new Schema({
    title: { type: String, required: true},
    year: { type: String, required: true}
})

const Article = mongoose.model('Article', articleScheme);

module.exports = Article;