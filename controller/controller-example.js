// IF WORKING IN ONE FILE WITH NO INDEX!!!

// WHAT IS IT?
// Handles the client requests (req) and responses (res)
// Doesn't always have to request anything!

// HOW DOES IT WORK?
// It invokes the model that will interact with the dataset.

// WHAT DOES IT DO?
// Sends back errors

// IT NEEDS ACCESS TO...
// The model

// IT MUST BE EXPORTED TO...
// The app

const {
  modelFunction,
  anotherModelFunction,
} = require("../model/model-example");
// functions are required in from the model

// Request and response handling and error handling might look like...
getTeams = (req, res, next) => {
  selectTeams()
    .then((teams) => {
      res.status(200).send({ teams });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { controllerFunction, anotherControllerFunction };
// These functions need to be made available to the app
