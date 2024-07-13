// WHAT IS IT?
// A file where we can programmatically add large quantities of data to our database

// HOW DOES IT WORK?
// This is where the data is kept that will be invoked by our run-seed file

// WHAT DOES IT DO?
// This file creates our database and populates it

// IT NEEDS ACCESS TO...
// connection.js // pg-format //

// IT MUST BE EXPORTED TO...
// run-seed file

const db = require("../database/connection");
const format = require("pg-format");

module.exports = seed;
