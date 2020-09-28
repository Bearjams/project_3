import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import Home from "./pages/Home";
import loggedIn from "./pages/loggedIn";
import bookclub from "./pages/bookclub";
import withAuth from "./withAuth.js";
import './fonts.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/loggedIn" component={loggedIn} />

          <Route exact path="/bookclub" component={bookclub} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;
