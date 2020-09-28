var mongoose = require("mongoose");
const User = require("./User")
var Schema = mongoose.Schema;

var BookclubSchema = new Schema({
    BookclubName: {
        type: String,
      },
      BookclubBio: {
        type: String,
      },

});

var Bookclub = mongoose.model("Bookclub", BookclubSchema);

module.exports = Bookclub;