// Require all models
var db = require("../models");

// Routes
module.exports = {
  findAll: function (req, res) {
    db.Book
      .find(req.query)
      .sort({ vote: -1 })
      .then(dbModel => res.json(dbModel))

  },
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))

  },
  create: function (req, res) {
    console.log(req.body)
    db.Book
      .create(req.body.bookData)
      .then(dbModel => res.json(dbModel))

  },
  update: function (req, res) {

    console.log("this is reqbody" + JSON.stringify(req.body))
    db.Book

      .findOne({ bookID: req.body.bookID }, (err, result) => {
        console.log(result.vote)
        db.Book.updateOne({ _id: result._id }, { vote: result.vote + 1 })
          .then(dbModel => {
            res.json(dbModel)
          }
          )

      }
      )
  },
};



