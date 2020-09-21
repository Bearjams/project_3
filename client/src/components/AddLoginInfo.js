import React, { Component } from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

class AddLogInInfo extends Component {
  state =
    {
      visible: true,
      modalIsOpen: false,
      // isAuthenticated: false,
      // resData:'',
      username:'',
      password:''
    }
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //     username: '',
  //     password: ''
  //   }
  // }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
 


  submitHandler = (e) => {
    e.preventDefault()
    console.log("Hello WORLD!" + this.state.username)
    console.log("Hello WORLD!" + this.state.password)

    API.logInUser({
      username: this.state.username,
      password: this.state.password

     }).then(function (response) {
      console.log(response);

     });
    // axios.post("https://samepage.com/bookclub/post", this.state)
    // .then (response => {
    //     console.log(response);
    // })
    // .catch (error => {
    //     console.log(error);
    // })
  }
  toggleModalThree() {
    this.setState({
      modalThreeIsOpen: !this.state.modalThreeIsOpen


    });
  }
  render() {
    const { username, password } = this.state
    console.log("THIS IS STATE OBJECT" + JSON.stringify(this.state))
    return (
      <div>

        <form onSubmit={this.submitHandler}>
          <div>
            <h6>Please enter your Username and Password?</h6>
            <br>
            </br>
                  Username <input type="text"
              name="username"
              value={username}
              onChange={this.changeHandler} />
            <br>
            </br>
            <br>
            </br>
                        Password <input type="password"
              name="password"
              value={password}
              onChange={this.changeHandler} />
          </div>
          <br>
          </br>


          <Button color="primary" onClick={this.submitHandler} className="btn btn-warning">Log in</Button>
        </form>
        <br>
        </br>

        <Modal isOpen={this.state.modalThreeIsOpen}>
          <ModalHeader toggle={this.toggleModalThree.bind(this)}>Logged In Successful</ModalHeader>

          <ModalBody>
            WELCOME BACK!
          </ModalBody>
          <ModalFooter>
            <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
              <Button color="primary" onClick={this.toggleModalThree.bind(this)} className="btn btn-warning">Okay</Button>
            </Link>

          </ModalFooter>


        </Modal>
      </div>
    )
  }
}



export default AddLogInInfo