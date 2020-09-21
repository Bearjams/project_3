const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User")


const bookSchema = new Schema({

    bookName: { type: String  },
    bookID: { type: String },
    authors: [{ type: String }],
    comment: [{ type: String }],
    photoLink:[{type: String}],
    previewLinks:[{type: String}],
    bookDescriptions:[{type: String}],
    vote:  {type: Number} ,
   

  
});





const Book = mongoose.model("Book", bookSchema);

// Book.associate = function () {
//     // We're saying that a Post should belong to a user
//     // A Post can't be created without an user due to the foreign key constraint
//     Book.belongsTo(User, {
//         foreignKey: {
//             allowNull: false
//         }
//     });
// };


module.exports = Book;