// IF WORKING IN ONE FILE WITH NO INDEX!!!

// WHAT IS IT?
// The Model respresents the data and business logic of an application

// HOW DOES IT WORK?
// Handles queries, the fetching, updating, creation and deletion of data

// WHAT DOES IT DO?
// Interacts with the data and sends the relevant data in the required format to the controller

// IT NEEDS ACCESS TO...
// The connection

// IT MUST BE EXPORTED TO...
// The controller

const db = require("../database/connection");
// The model needs to be able to communicate with the database

// This is where our queries will live...
// The might look something like this...
insertTeam = ({ team_name, formation_year }) => {
  return db
    .query(
      "INSERT INTO teams (team_name, formation_year) VALUES ($1, $2) RETURNING *;",
      [team_name, formation_year]
    )
    .then((result) => {
      return result.rows[0];
    });
};

module.exports = { modelFunction, anotherModelFunction };
// functions in the model need to be made available to the controller
