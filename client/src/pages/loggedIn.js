import React from "react";
import axios from 'axios';
import API from "../utils/API.js";
import { Container, Col, Row, Button, Alert, ModalHeader, ModalBody, ModalFooter, Label, Input, } from "reactstrap";
import ReactDom from "react-dom";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AddBookBtn from '../components/AddBookBtn.js'
import { Component } from "react";
import { Link } from "react-router-dom";


import Likes from '../components/likesBtn.js';

import View from "react"


const styles = {
  card: {
    border: "1px lightgray solid",
    borderRadius: "5px",
    maxWidth: "260px",
    minHeight: "320px",
    paddingTop: "15px"


  },

  a: {
    fontFamily: "Pacifico"

  },
  img: {
    height: "180px"
  },


  formation: {
    textAlign: "center",
  },



};

class Search extends Component {

  state = {

    currentSearch: "",
    books: [],
    booktitle: "",
    id: "",
    title: "",
    saved: [],
    likes: 0,

    updated: false,

  };
  componentDidMount() {
    API.savedBooks()
      .then(dataBooks => {
        console.log(JSON.stringify(dataBooks))
        this.setState({ saved: dataBooks })
      })
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });

  };
  handleSubmit = (event) => {

    event.preventDefault();

    this.searchBook()


  }
  searchBook = () => {

    API.getBook(this.state.title)
      .then(data => {
        console.log(data.data.items);
        console.log("this is " + this.state.title)
        this.setState({ books: data.data.items })
      })
  }


  handleItemClick = (e) => {



    e.preventDefault();


    console.log(e.target.getAttribute("data-key"));
    API.saveBook({
      bookName: e.target.getAttribute("data-title"),
      bookID: e.target.getAttribute("data-key"),
      authors: e.target.getAttribute("data-author"),
      photoLink: e.target.getAttribute("data-photo"),
      previewLinks: e.target.getAttribute("data-plinks"),
      bookDescriptions: e.target.getAttribute("data-bio"),
      vote: 1


    })
    API.savedBooks()
      .then(dataBooks => {
        console.log(JSON.stringify(dataBooks))
        this.setState({ saved: dataBooks })
      })

  };

  handleSavedItemClick = (e) => {
    e.preventDefault();
    console.log("This is event.targert" + e.target)
    console.log(e.target.getAttribute("data-ID"));
    console.log(e.target.getAttribute("data-vote"));
    const savedVote = e.target.getAttribute("data-vote");
    const savedBookID = e.target.getAttribute("data-ID");
    const dbBookID = e.target.getAttribute("data-dbkey");

    // console.log(savedVote)

    const bookData = {
      bookName: e.target.getAttribute("data-title"),
      dbbookID: e.target.getAttribute("data-dbkey"),
      authors: e.target.getAttribute("data-author"),
      photoLink: e.target.getAttribute("data-photo"),
      previewLinks: e.target.getAttribute("data-plinks"),
      bookDescriptions: e.target.getAttribute("data-bio"),
      bookID: savedBookID


    }
    console.log("this is DBBOKID " + dbBookID)

    API.voteBook(dbBookID, bookData)
      .then(result => {
        console.log("Vote Book result data" + JSON.stringify(result.data))
        API.savedBooks()
        window.location.reload();
      })
    console.log(this.state.likes)
  }

  render() {
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
                <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
                  <a className="nav-link username, signOut" href="#">Logged In<span className="sr-only">(current)</span></a>
                </Link>
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
              <form id="searchbar"
                currentSearch={this.state.currentSearch}
                onSubmit={this.handleSubmit}
              >

                <input id="booksearch"
                  value={this.state.title}
                  className="form-control mr-sm-2"


                  type="text"
                  onChange={this.handleChange}
                  placeholder="Search by Author or Title"
                  aria-label="Search"
                  name="title"
                ></input>
                <button id="book-submit"
                  className="btn btn-warning"
                  type="submit">Search</button>
              </form>

            </ul>
          </div>
        </nav>







        <div id="top-week-one" >


          <Container>

            <Row>
              {this.state.books.map(book => (


                <div className="col-md-6 col-lg-4 col-xl-3 py-2">
                  <div style={styles.card} className="card-border text-center">




                    <a href={book.volumeInfo.previewLink}>  </a>
                    <img style={styles.img} src={
                      book.volumeInfo.imageLinks === undefined
                        ? ""
                        : `${book.volumeInfo.imageLinks.thumbnail}`
                    } alt={book.title} className="img py-2" />

                    <h6  >{book.volumeInfo.title}</h6>
                    <p style={styles.formation} >By {book.volumeInfo.authors}</p>

                    <AddBookBtn handleClick={this.handleItemClick} id="addBook" bookKey={book.id} bookTitle={book.volumeInfo.title} bookAuthor={book.volumeInfo.authors}
                      bookPhoto={
                        book.volumeInfo.imageLinks === undefined
                          ? ""
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      } bookPlinks={book.volumeInfo.previewLink} bookBio={book.volumeInfo.description}

                    > </AddBookBtn>

                    <a href={book.volumeInfo.previewLink} target="_blank">
                      <Button className="btn btn-danger mb-2">Buy Book</Button>
                    </a>

                    {/* {<p >BOOK BIO: {book.volumeInfo.description}</p>} */}
                    <Accordion >
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Bio!
                </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>{book.volumeInfo.description}</Card.Body>
                        </Accordion.Collapse>
                      </Card>

                    </Accordion>
                  </div>
                </div>




              ))}
            </Row>
          </Container>


          

          <div className="container">
            <div className="w-100"></div>

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
            <div className="w-100"></div>

            <div className="col-md-12">
              <h4>Top Rated Books</h4>
            </div>
            <div>
            </div>
            <div className="w-100"></div>
            <Container>
              <Row>
                {this.state.saved.map(sBook => (

                  <div className="col-md-6 col-lg-4 col-xl-3 py-2">
                    <div style={styles.card} className="card-border text-center">
                      <a href={sBook.previewLinks}>  </a>
                      <img style={styles.img} src={`${sBook.photoLink}`} />
                      <h6>{sBook.bookName}</h6>
                      <p style={styles.formation} >By {sBook.authors}</p>
                      
                      <a href={sBook.previewLinks} target="_blank">
                        <Button className="btn btn-danger mb-2">Buy Book</Button>

                      </a>
                      
                      <div id="bookone-votes">
                        <Likes dataID={sBook.bookID} dbdataKey={sBook._id} dataVote={sBook.vote} bookTitle={sBook.bookName} bookAuthor={sBook.authors} bookPhoto={sBook.photoLink} bookPlinks={sBook.previewLinks} bookBio={sBook.bookDescriptions} handleClick={this.handleSavedItemClick}> </Likes>
                        <div>Likes: {sBook.vote}</div>
                      </div>

                      
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







        </div>







      </React.Fragment>




    );
  }

}










export default Search;