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

router.put('/update/:id/:status', function(req, res) {
    var id = req.params.id;
    var status = req.params.status;

    Article.findOne({title: id}, function(err, foundObject) {
        if(err) {
            console.log(err);
            res.status(500).send();
        } else {
            if(!foundObject) {
                res.status(404).send();
            } else {
                foundObject.status = status;

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
