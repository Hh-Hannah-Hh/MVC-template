// WHAT IS IT?
// A separate file is set up to listen to the server

// HOW DOES IT WORK?
// This will soon become clear...!

// WHAT DOES IT DO?
// This allows the server to remain open for testing

// IT NEEDS ACCESS TO...
// The app

const express = require("express");
const app = express();
// Express is an app that is initialised as part of the Express library

app.use(express.json());
// express.json() is a built-in middleware function that will parse incomming request JSON bodies

app.listen(8899, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 8899");
  }
});
// set up the server to listen for requests on the desired port
