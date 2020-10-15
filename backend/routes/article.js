const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/retrieve/:id').post((req, res) => {
    Article.find({ status: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
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
    const status = req.body.status;
    const newArticle = new Article({title, year, author, month, volume, pagesNum, numOfPages, ePrint, ePrintType, ePrintClass, annote, status});  

    newArticle.save()
    .then(() => res.json('Article has successfully been sent for review!'))
    .catch(err => res.status(400).json('err: ' + err));
});

router.put('/update', function(req, res) {
    Article.findOne({title: req.body.title}, function(err, foundObject) {
        if(err) {
            console.log(err);
            res.status(500).send();
        } else {
            if(!foundObject) {
                res.status(404).send();
            } else {
                if(req.body.author != null) foundObject.author = req.body.author;
                if(req.body.month != null) foundObject.month = req.body.month;
                if(req.body.volume != null) foundObject.volume = req.body.volume;
                if(req.body.numOfPages != null) foundObject.numOfPages = req.body.numOfPages;
                if(req.body.ePrint != null) foundObject.ePrint = req.body.ePrint;
                if(req.body.ePrintType != null) foundObject.ePrintType = req.body.ePrintTypev;
                if(req.body.ePrintClass != null) foundObject.ePrintClass = req.body.ePrintClass;
                if(req.body.annote != null) foundObject.annote = req.body.annote;
                if(req.body.status != null) foundObject.status = req.body.status;
                if(req.body.keyValues != null) foundObject.keyValues = req.body.keyValues;

                foundObject.save(function(err, updatedObject) {
                    if(err) {
                        console.log(err);
                        res.status(500).send();
                    } else {
                        res.send(updatedObject);
                    }
                })
            }
        }
    })
});

module.exports = router;