import React from "react";
import axios from 'axios';
import API from "../utils/API.js";
// import savedBooks from "./savedBooks.js"
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
    // name: "",
    // value: "",
    title: "",
    saved: [],
    likes: 0,

    updated: false,

    // savedBooks: []
  };
  componentDidMount() {
    API.savedBooks()
      .then(dataBooks => {
        console.log(JSON.stringify(dataBooks))
        this.setState({ saved: dataBooks })
      })

    // .then(saved => this.setState({ saved: saved }))
    // .catch(err => console.error(err));
  }



  // displayResults = () => {
  //   API.getbook()
  //   .then(res  =>
  //   this.setState({res})  
  //     )
  //     .catch(err => console.log(err));
  // };

  handleChange = (event) => {
    // this.setState({currentSearch:event.target.value})
    const name = event.target.name;
    const value = event.target.value;
    // const setBook = React.useState("");
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
      // console.log(query)
      .then(data => {
        console.log(data.data.items);
        console.log("this is " + this.state.title)

        this.setState({ books: data.data.items })

        // .map(bookData => this.renderBooks(bookData))});

        // setResult(data.data.items)
      })
  }


  handleItemClick = (e) => {



    e.preventDefault();


    console.log(e.target.getAttribute("data-key"));
    // API.saveBook(e.target.getAttribute("data-key"))
    API.saveBook({
      bookName: e.target.getAttribute("data-title"),
      bookID: e.target.getAttribute("data-key"),
      authors: e.target.getAttribute("data-author"),
      photoLink: e.target.getAttribute("data-photo"),
      previewLinks: e.target.getAttribute("data-plinks"),
      bookDescriptions: e.target.getAttribute("data-bio")


    })
    // API.saveBook(e.target);
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
    // API.getBookID(savedBookID).then(request => {
    //   this.setState({

    //   })
    //    console.log(request)

    // })
    // this.setState({savedVote:this.state.likes})


    API.voteBook(dbBookID, bookData)
      .then(result => {


        console.log("Vote Book result data" + JSON.stringify(result.data))

        //     //  this.setState({ vote: this.state.likes })

        // this.setState({likes: 0})
        API.savedBooks()
        window.location.reload();
      })
    console.log(this.state.likes)

    // API.savedBooks()
    //   .then(dataBooks => {
    //     console.log(JSON.stringify(dataBooks))
    //     this.setState({
    //       saved: dataBooks,
    //       likes: 1
    //     })

    //   })







    // API.getBookID(savedBookID).then(dbBook => {
    //   console.log(JSON.stringify(dbBook))
    //   // this.setState({ saved: dataBooks })
    // })

  }

  // getSavedBooks = (data) => {
  //   API.savedBooks(data)
  //   console.log("This is Data: " +data)
  //   // .then(data => {
  //   //  ;
  //   //   // this.setState({ savedBooks: savedData })
  //   // })
  // }








  //console.log(book);







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

                    {/* {this.state.savedBooks.map(book => book.volumeInfo).includes(book._id) ? "Unsave" : "Save"} */}

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


          {/* <div>IMAGE:</div> */}
          {/* <img src="" alt="" class="img img-thumbnail"> </img> */}

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
                      {/* {this.state.savedBooks.map(book => book.volumeInfo).includes(book._id) ? "Unsave" : "Save"} */}
                      <a href={sBook.previewLinks} target="_blank">
                        <Button className="btn btn-danger mb-2">Buy Book</Button>

                      </a>
                      {/* <button type="button" className="btn btn-primary vote-button" data-googleid=""><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" /></svg></button> */}
                      <div id="bookone-votes">
                        <Likes dataID={sBook.bookID} dbdataKey={sBook._id} dataVote={sBook.vote} bookTitle={sBook.bookName} bookAuthor={sBook.authors} bookPhoto={sBook.photoLink} bookPlinks={sBook.previewLinks} bookBio={sBook.bookDescriptions} handleClick={this.handleSavedItemClick}> </Likes>
                        <div>Likes: {sBook.vote}</div>
                      </div>

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







        </div>







      </React.Fragment>




    );
  }

}










export default Search;