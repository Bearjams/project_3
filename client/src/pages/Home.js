
import React, { Component } from "react";
import { Container, Row, Col, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import AddLogInInfo from "../components/AddLoginInfo.js";
import AddSignUp from "../components/addSignUp.js";
import Likes from '../components/likesBtn.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import API from "../utils/API.js";

const styles = {
  card: {
    border: "1px lightgray solid",
    borderRadius: "5px",
    maxWidth: "260px",
    boxSizing: "border-box",
    display: "block",
    textAlign: "center",
    paddingTop: "15px"

  },
  cardBorder: {
    border: "1px lightgray solid",
    borderRadius: "5px",
    maxWidth: "260px",
    boxSizing: "border-box",
    display: "block",
    textAlign: "center",
    padding: "5px"

  },
  col: {
    paddingTop: ".5rem",
    paddingBottom: ".5rem"
  },
  a: {
    fontFamily: "Pacifico"

  },
  img: {
    height: "180px"
  },
};

class Home extends Component {
  state = {
    visible: true,
    modalIsOpen: false,
    currentSearch: "",
    books: [],
    title: "",
    saved: []
  }
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen

    });
  }
  toggleModalTwo() {
    this.setState({
      modalTwoIsOpen: !this.state.modalTwoIsOpen


    });
  }
  toggleModalThree() {
    this.setState({
      modalThreeIsOpen: !this.state.modalThreeIsOpen


    });
  }
  componentDidMount() {
    API.savedBooks()
      .then(dataBooks => {
        console.log(JSON.stringify(dataBooks))
        this.setState({ saved: dataBooks })
      })
  }
  searchBook = () => {

    API.getBook(this.state.title)
      // console.log(query)
      .then(data => {
        console.log(data.data.items);
        console.log("this is " + this.state.title)
        this.setState({ books: data.data.items })
      })
  }
  
  render() {
    return (
      
      <React.Fragment>
         
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <a className="navbar-brand" id="page-title" href="#" style={styles.a}>Same Page</a>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item active">
                <a color="primary" className="nav-link" style={{cursor:'pointer'}} onClick={this.toggleModalTwo.bind(this)}>Login</a>
              </li>
              <li className="nav-item active">
                <Button color="primary" className="btn btn-warning" onClick={this.toggleModal.bind(this)}>Sign Up</Button>
              </li>

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
                <h4>Top Rated Books</h4>
              </div>
            </div>


          </div>

        <Container>
              <Row>
                {this.state.saved.map(sBook => (

                  <div className="col-md-6 col-lg-4 col-xl-3 py-2">
                    <div style={styles.card} className="card-border text-center">
                      <a href={sBook.previewLinks} target="_blank">  </a>
                      <img style={styles.img} src={`${sBook.photoLink}`} />
                      <h6>{sBook.bookName}</h6>
                      <p style={styles.formation} >By {sBook.authors}</p>
                      <a href={sBook.previewLinks} target="_blank">
                        <Button className="btn btn-danger mb-2">Buy Book</Button>

                      </a>                      
                      <div>Likes: {sBook.vote}</div>
                      <Accordion >
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              Bio!
                                      </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>{sBook.bookDescriptions}</Card.Body>
                          </Accordion.Collapse>
                        </Card>

                      </Accordion>
                    </div>
                  </div>
                ))}
              </Row>
            </Container>

        </div>

        <Modal isOpen={this.state.modalTwoIsOpen}>
          <ModalHeader toggle={this.toggleModalTwo.bind(this)}>Please enter your Username and Password</ModalHeader>

          <ModalBody>
            <AddLogInInfo />
          </ModalBody>
          <ModalFooter>
            
         

            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModalTwo.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>



        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Please create a Username and Password</ModalHeader>

          <ModalBody>
    <AddSignUp />
    </ModalBody>
          <ModalFooter>
          <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
            <Button color="primary" className="btn btn-warning">Sign Up</Button>
</Link>
            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModal.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>
        
      </React.Fragment>
    )
  }
}



export default Home;
