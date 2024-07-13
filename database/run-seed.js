// This is where the code lives that invokes our seed file with the neccessary data

const rawData = require("./filepathtorawdata");
const seed = require("./seed");
const db = require("./connection");

seed({ rawData }).then(() => db.end());
