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
const {} = require("");

const app = express();

app.use(express.json());

...

module.exports = app;