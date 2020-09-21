import React from "react";
import axios from 'axios';
import API from "../utils/API";
import { Container, Col, Row, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import ReactDom from "react-dom";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AddBookBtn from '../components/AddBookBtn.js'
import { Component } from "react";
import LoggedIn from "./loggedIn.js";
import AddBookClubPost from "../components/AddBookClubPost.js";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import image01 from '../assets/image01.jpeg';
import image02 from '../assets/image02.jpg';
import image03 from '../assets/image03.jpeg';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'




const styles = {
    card: {
      border: "1px lightgray solid",
      borderRadius: "5px",
      maxWidth: "500px",
      minHeight: "111.600px",
  
  
    },
  
    a: {
      fontFamily: "Pacifico"
  
    },
    img: {
      maxheight: "40px",
      maxWidth: "40px",
      border: "1px lightgray solid",
    },
  
  
    formation: {
      textAlign: "center",
    }
  
  
  };




class bookclubs extends Component {

    state = {
        visible: true,
        modalIsOpen:false
     
      }
      toggleModal (){
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
      
      });
    }
    // componentDidMount() {
  
    //   this.setState({ data: this.savedBooks(this.state.data) });
    //   // API.savedBooks()
    //   //     .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    //   //     .catch(err => console.error(err));
    // }
  
  
  


render () {
    return (
  
        <React.Fragment>



<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <a className="navbar-brand" id="page-title" href="#" style={styles.a}>Same Page</a>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Return to logged in page!</Tooltip>}>
                  <span className="d-inline-block">
                    <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"} >
                      <a className="nav-link username, signOut" href="#">Book Clubs<span className="sr-only">(current)</span></a>

                    </Link>
                  </span>
                </OverlayTrigger>
              </li>
              <li className="nav-item active">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  <button className="btn btn-warning" onClick="" type="button" id="sign-out">Sign Out</button>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/bookclub" className={window.location.pathname === "/bookclub" ? "nav-link active" : "nav-link"}>
                  <button className="btn btn-danger" onClick="" type="button" id="sign-out">Bookclubs</button>
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-right">
              {/* <form id="searchbar" onSubmit={handleSubmit}> */}
              <form id="searchbar" >
                {/* <input id="booksearch" className="form-control mr-sm-2" type="search" onChange={handleChange} */}
                <input id="booksearch" className="form-control mr-sm-2" type="search"
                  placeholder="Search by Author or Title" aria-label="Search"></input>
                <button id="book-submit" className="btn btn-warning"
                  type="submit">Search</button>
              </form>

            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="w-100"></div>
          <div className="row">
            <div className="col-md-6">
              <div id="user-Search"></div>
            </div>
            <br>
            </br>
            <div className="w-100"></div>
            <div className="row">
              <div id="book-info">
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">

                {/* <h4>Existing book clubs</h4>  */}
              </div>
            </div>


          </div>

          <div className="w-100"></div>
          <div className="row">
            <div className="col-md-12">
              {/* <AddBookClubPost>
                {createdBookclub.map((bookclub) => {
                  return (
                    <h4 >{bookclub.title}</h4>
                  )

                })}




              </AddBookClubPost> */}



            </div>

          </div>

          <div className="w-100"></div>
          <div className="row">
            <div className="col-md-4" style={styles.col}>







              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image01} />
                <Card.Body>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Title>Harry Potter Book Club!</Card.Title>
                  </div>
                  <hr></hr>
                  <Card.Text>
                    Muggles and wizards alike join our public bookclub to read, discuss, and appriciate Harry Potter with fellow enthusiasts.
                  </Card.Text>
                  <hr></hr>
                </Card.Body>

                <Card.Body>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Link href="#">Join Bookclub</Card.Link>
                  </div>
                </Card.Body>
              </Card>




            </div>
            <div className="col-md-4" style={styles.col}>


              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image02} />
                <Card.Body>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Title>John Irving Book Club!</Card.Title>
                  </div>
                  <hr></hr>
                  <Card.Text>
                    If your an Irving fan like me come join this club! (Keep passing open windows)
                  </Card.Text>
                  <hr></hr>
                </Card.Body>

                <Card.Body>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Link href="#">Join Bookclub</Card.Link>
                  </div>

                </Card.Body>
              </Card>


            </div>
            <div className="col-md-4" style={styles.col}>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image03} />
                <Card.Body>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Title>Murder Mystery Book Club!</Card.Title>
                  </div>
                  <hr></hr>
                  <Card.Text>
                    For people who love page turners. If you cant put your book down this club is for you!
                  </Card.Text>
                  <hr></hr>
                </Card.Body>

                <Card.Body>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Link href="#">Join Bookclub</Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br></br>
          <Button className="btn btn-warning" onClick={this.toggleModal.bind(this)}>Create book club</Button>

        </div>



        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Create a book club</ModalHeader>

          <ModalBody>
            <AddBookClubPost />
          </ModalBody>
          <ModalFooter>




            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModal.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>

      </React.Fragment>


    )


  }
}

export default bookclubs;