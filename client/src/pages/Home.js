
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





// const styles = {
//   pageTitle: {
//     fontFamily: 'Pacifico', 'cursive'
// }
// };

class Home extends Component {
  state = {
    visible: true,
    modalIsOpen: false,
    currentSearch: "",
    books: [],
    // name: "",
    // value: "",
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

    // .then(saved => this.setState({ saved: saved }))
    // .catch(err => console.error(err));
  }
  searchBook = () => {

    API.getBook(this.state.title)
      // console.log(query)
      .then(data => {
        console.log(data.data.items);
        console.log("this is " + this.state.title)

        this.setState({ books: data.data.items })

        // .map(bookData => this.renderBooks(bookData))});

        // setResult(data.data.items)
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
                      {/* {this.state.savedBooks.map(book => book.volumeInfo).includes(book._id) ? "Unsave" : "Save"} */}
                      <a href={sBook.previewLinks} target="_blank">
                        <Button className="btn btn-danger mb-2">Buy Book</Button>

                      </a>
                      {/* <button type="button" className="btn btn-primary vote-button" data-googleid=""><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" /></svg></button> */}
                      <div>Likes: {sBook.vote}</div>

                      {/* {<p >BOOK BIO: {book.volumeInfo.description}</p>} */}
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
{/* 
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


        </Modal> */}

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
