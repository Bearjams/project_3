import React, { Component } from "react";
import API from "../utils/API";
import LoggedIn from "../pages/loggedIn"
import { Container, Col, Row, Button } from "reactstrap";

function Likes(props) {

    return (
        <button
            className="btn btn mb-2 btn-primary"
            data-ID={props.dataID}
            data-key={props.bookKey}
            data-title={props.bookTitle}
            data-author={props.bookAuthor}
            data-photo={props.bookPhoto}
            data-plinks={props.bookPlinks}
            data-bio={props.bookBio}
            data-dbkey={props.dbdataKey}
            onClick={props.handleClick}


        >👍</button>


    );
}


export default Likes;