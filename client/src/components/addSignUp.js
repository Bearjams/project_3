import React, { Component } from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../utils/API.js";

class AddSignUpInfo extends Component {
  state =
    {
      visible: true,
      modalIsOpen: false,
      username: '',
      password: ''
    }


  changeHandler = (e) => {
    // console.log("This is e.target.value" + e.target.value)

    this.setState({ [e.target.name]: e.target.value })


    // console.log("This is username " + e.target.getAttribute("data-username"));

  }


  submitHandler = (e) => {
    e.preventDefault()
    console.log("Hello WORLD!" + this.state.username)
    console.log("Hello WORLD!" + this.state.password)
    const username = this.state.username;
    const password = this.state.password;
    const userInput = username + password
    API.signUpUser(userInput)

  }

  toggleModal() {
    this.setState({
      modalThreeIsOpen: !this.state.modalThreeIsOpen


    });
  }

  render() {
    const { username, password } = this.state
    console.log("THIS IS STATE OBJECT" + JSON.stringify(this.state))


    return (
      <div>

        <form >
          <div>
            <h6>Please enter your Username and Password?</h6>
            <br>
            </br>
                  Username <input type="text"
              name="username"
              value={username}
              onChange={this.changeHandler}
              data-username={username} />
            <br>
            </br>
            <br>
            </br>
                        Password <input type="password"
              name="password"
              value={password}
              onChange={this.changeHandler}
              data-password={password} />
          </div>
          <br>
          </br>



        </form>
        <br>
        </br>

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>You're All Set!</ModalHeader>

          <ModalBody>
            Join Now!
          </ModalBody>
          <ModalFooter>
            <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
              <Button color="primary" onClick={this.toggleModal.bind(this)} className="btn btn-warning">Okay</Button>
            </Link>

          </ModalFooter>


        </Modal>
      </div>
    )
  }
}



export default AddSignUpInfo