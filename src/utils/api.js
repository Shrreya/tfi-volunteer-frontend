var Parse = require('parse');
require('dotenv').config();
Parse.initialize(process.env.REACT_APP_BACKEND_APP_ID);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

export function getInitialData () {
  var City = Parse.Object.extend("City");
  var cityQuery = new Parse.Query(City);
  var Opp = Parse.Object.extend("Opportunity");
  var oppQuery = new Parse.Query(Opp);
  return Promise.all([
    cityQuery.find(),
    oppQuery.find()
  ]).then(([cities, opps]) => ({
    cities,
    opps
  }));
}
