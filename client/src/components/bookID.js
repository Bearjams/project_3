import React, { Component } from "react";
import API from "../utils/API";
import LoggedIn from "../pages/loggedIn"
import { Container, Col, Row, Button } from "reactstrap";

function bookID(props) {
    return (
        <button
            className="btn btn mb-2 btn-warning"
            data-key={props.bookIDKey}
       
           


          

        
            onClick={props.handleClick}


        >bookKey</button>


    );
}

export default bookID;