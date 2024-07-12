// WHAT IS IT?
//This is our main file

// HOW DOES IT WORK?
// This is the top level of the application where the first line of code is read

// WHAT DOES IT DO?
// Takes requests from the client / pool
// Directs requests to the endpoint

// IT NEEDS ACCESS TO...
// The controller

const express = require("express");
const app = express();
// Express is an app that is initialised as part of the Express library

app.use(express.json());
// express.json() is a built-in middleware function that will parse incomming request JSON bodies

const {
  controllerFunction,
  anotherControllerFunction,
} = require("./controller/controller-example");
// functions from the controller file are required in and made accessible to the app

app.method("/api/endpoint", functionName);
// This is where Express has access to the requests and responses objects and functions as middleware

// At the bottom of the app file...
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status).send({ msg: err.msg });
});
// ... errors are handled

module.exports = app;
// the app is exported to be available elsewhere as required
