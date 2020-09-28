const router = require('express').Router();
var Article = require('../models/article.model');

router.route('/').get((req, res) => {
    Article.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const year = req.body.year;

    const newArticle = new Article({
        title,
        year
    });

    newArticle.save()
    .then(() => res.json('article added!'))
    .catch(() => res.status(400).json('err: ' + err));
});

module.exports = router;