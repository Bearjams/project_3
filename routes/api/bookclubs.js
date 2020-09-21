const router = require("express").Router();
const bookclubController = require("../../controllers/bookclubController.js")

router.route("/")
    // .get(signupController.findAll)
    .post(bookclubController.create);

module.exports = router;