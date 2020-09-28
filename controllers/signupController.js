var db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    db.User
      .create(req.body.signupData)
      .then(dbModel => res.json(dbModel))
  },
  loggedin: function (req, res) {
    
    var username = JSON.stringify(req.body.username);
    var password = JSON.stringify(req.body.password);

    if (username && password) {
      var hashed_password = crypto.createHash("sha1").update(req.body.password).digest("hex");
    }
    db.User
      .find({
        username: req.body.username,
        password: hashed_password


      })
      
  },
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))  
  },
};