import axios from "axios";
import React from "react";
import jsonParser from "body-parser";
import urlencodedParser from "body-parser"

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyC5HzoMzNglXG_H1OUXl6DHyVlhOF9KFiI"






export default {
  getBook: function (currentsearch) {
    return axios.get(BASEURL + currentsearch + APIKEY + "&maxResults=8");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("localhost/api/books/" + id).then(result => result.data);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log(bookData); const bookdatas = JSON.stringify(bookData)
    return axios.post("/api/books", { bookData }).then(result => result.data);

  },

  // Get the saved a books from the database
  savedBooks: function () {

    return axios.get("/api/books").then(result => result.data);

  },
  getBookID: function (id) {
    return axios.get("/api/books/" + id)

  },
  voteBook: function (savedVote, bookData) {
    //  console.log(req.body.bookID)
    if (savedVote) {
      const url = "/api/books/" + savedVote

      return axios.put(url, bookData)
    }


  },


  signUpUser: function (signupInput, signupData) {

    const signUpURL = "/api/user"
    // console.log("username " + username + "password " + password)
    return axios.post(signUpURL)
    // .then(result => result.data);

  },

  logInUser: function (loginData) {
    console.log(loginData)
    // console.log("username " + username + "password " + password)
    return axios.post("/api/user", { loginData }).then(result => result.data);
    // .then(result => result.data);

  },
  savedBookclubs: function () {

    return axios.get("/api/bookclub").then(result => result.data);

  },

  onClickBookclub: function () {

    return axios.get("/api/bookclub").then(result => result.data);

  },

  saveBookclub: function (bookclubData) {
    console.log(bookclubData)
    // console.log("username " + username + "password " + password)
    return axios.post("/api/bookclub", { bookclubData }).then(result => result.data);
    // .then(result => result.data);

  },




};
  // http://localhost:3000/