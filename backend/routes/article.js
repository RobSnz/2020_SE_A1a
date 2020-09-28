const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
    Article.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const newArticle = new Article({
        title: "hello",
        year: "chicken"
    });
    
    newArticle.save()
    .then(() => res.json('article added!'))
    .catch(err => res.status(400).json('err: ' + err));
});

module.exports = router;