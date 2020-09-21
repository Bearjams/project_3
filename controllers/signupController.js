var db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    db.User
      .create(req.body.signupData)
      .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },
  loggedin: function (req, res) {
    
    var username = JSON.stringify(req.body.username);
    var password = JSON.stringify(req.body.password);
    // console.log("This is req.body " +username + password)
    if (username && password) {
      var hashed_password = crypto.createHash("sha1").update(req.body.password).digest("hex");
    }
    db.User
      .find({
        username: req.body.username,
        password: hashed_password


      })
      // .then(function (req, res) {

      //   if (res) {
      //     console.log(req.length > 0)
      //     req.session.loggedin = true;
      //     req.session.userID = results[0]._id;
      //     req.session.username = results[0].username;
      //     res.send("userLoggedIn");
      //     // res.sendStatus(200)
      //   }
      //   else {
      //     res.send("wrongPassOrUser");
      //     // res.sendStatus(404)
      //   }
      // })
    //     .then(function (req, res){
    //   if (req.session.loggedin) {
    //     res.sendStatus(200)
    //   } else {
    //     res.sendStatus(404)
    //   }
    // })
  },
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },



  // create: function (req, res) {
  //   var username = req.body;
  //   var password = req.body;
  //   if (username && password) {
  //     var signupDataBack = {
  //       username: username
  //     };

  //     db.User
  //       .find({where: signupDataBack})
  //       // .sort({ date: -1 })
  //       .then(dbModel => res.json(dbModel))
  //     if (dbModel.length === 0) {
  //       // var hashed_password = crypto.createHash("sha1").update(req.body.password).digest("hex");
  //       // var postObj = {
  //       //   username: username,
  //       //   password: hashed_password
  //       // }
  //       db.User
  //         .create(req.body.signupData)
  //         .then(dbModel => res.json(dbModel))
  //         .then(res.send("userCreateSuccess"))
  //     }
  //     else {
  //       res.send("userAlreadyExists");
  //     }
  //   }else{
  //     res.send("formNotComplete")
  //   }

  //   // .catch(err => res.status(422).json(err));
  // },

};