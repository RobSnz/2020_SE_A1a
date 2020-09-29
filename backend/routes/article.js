const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
    Article.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req.body)
    
    const title = req.body.title;
    const year = req.body.year;
    const author = req.body.author;
    const month = req.body.month;
    const volume = req.body.volume;
    const pagesNum = req.body.pagesNum;
    const numOfPages = req.body.numOfPages;
    const ePrint = req.body.ePrint;
    const ePrintType = req.body.ePrintType;
    const ePrintClass = req.body.ePrintClass;
    const annote = req.body.annote;
    const newArticle = new Article({title, year, author, month, volume, pagesNum, numOfPages, ePrint, ePrintType, ePrintClass, annote});  

    newArticle.save()
    .then(() => res.json('article added!'))
    .catch(err => res.status(400).json('err: ' + err));
});

module.exports = router;