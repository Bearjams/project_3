const router = require("express").Router();
const signupController = require("../../controllers/signupController.js");

router.route("/")
    // .get(signupController.findAll)
    // .post(signupController.create)
    .post(signupController.loggedin)

     
module.exports = router;