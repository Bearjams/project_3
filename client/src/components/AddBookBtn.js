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





export default AddBookBtn;