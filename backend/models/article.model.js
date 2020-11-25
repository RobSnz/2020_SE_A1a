const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleScheme = new Schema({
    title: { type: String, required: true},
    year: { type: String, required: false},
    author: { type: String, required: false},
    month: { type: String, required: false},
    volume: { type: String, required: false},
    pagesNum: { type: String, required: false},
    numOfPages: { type: String, required: false},
    ePrint: { type: String, required: false},
    ePrintType: { type: String, required: false},
    ePrintClass: { type: String, required: false},
    annote: { type: String, required: false},
    status: { type: String, required: true},
    keyValues: { type: Array, required: false}
}, {
    timestamps: true,
});

const Article = mongoose.model('Article', articleScheme);

module.exports = Article;