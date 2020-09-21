var mongoose = require("mongoose");
const User = require("./User")
var Schema = mongoose.Schema;

var BookclubSchema = new Schema({
    BookclubName: {
        type: String,
        // trim: true,
        // required: "Username is Required"
      },
      BookclubBio: {
        type: String,
        // trim: true,
        // required: "Password is Required",
        // validate: [
        //   function(input) {
        //     return input.length >= 6;
        //   },
        //   "Password should be longer."
        // ]
      },

});

var Bookclub = mongoose.model("Bookclub", BookclubSchema);


// Bookclub.associate = function () {
//   // We're saying that a bookclub should belong to a user
//   // A bookclub can't be created without an user due to the foreign key constraint
//   Bookclub.belongsTo(User, {
//       foreignKey: {
//           allowNull: false
//       }
//   });
// };

module.exports = Bookclub;