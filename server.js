const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;
// Initialize Express
const app = express();

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// // Make public a static folder
// app.use(express.static("public"));

app.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: true,
}
));

app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/populatedb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// Start the server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});