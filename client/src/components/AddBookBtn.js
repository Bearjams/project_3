import React, { Component } from "react";
import API from "../utils/API";
import LoggedIn from "../pages/loggedIn"
import { Container, Col, Row, Button } from "reactstrap";

function AddBookBtn(props) {
    return (
        <button
            className="btn btn mb-2 btn-warning"
            data-key={props.bookKey}
            data-title={props.bookTitle}
            data-author={props.bookAuthor}
            data-photo={props.bookPhoto}
            data-plinks={props.bookPlinks}
            data-bio={props.bookBio}
           


          

        
            onClick={props.handleClick}


        >AddBook</button>


    );
}



// class AddBookBtn extends Component  {

// state = {
//     savedBooks: [],
// }

// componentDidMount() {
//     API.savedBooks()
//         .then(savedBooks => this.setState({ savedBooks: savedBooks }))
//         .catch(err => console.error(err));
// }

// handleSave = book => {

//     if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
//         API.deleteBook(book._id)
//             .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
//             .catch(err => console.error(err));
//     } else {
//         API.saveBook(book)
//             .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
//             .catch(err => console.error(err));


//     }
// }
// render() {
//     return (
//         <button o className="btn badge-pill btn-outline-warning mt-3 ml-3" >

//     </button>
//     )


//     }
// }

export default AddBookBtn;