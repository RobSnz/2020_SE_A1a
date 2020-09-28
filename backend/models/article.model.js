const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleScheme = new Schema({
    title: { type: String, required: true},
    year: { type: String, required: true}
}, {
    timestamps: true,
});

const Article = mongoose.model('Article', articleScheme);

module.exports = Article;