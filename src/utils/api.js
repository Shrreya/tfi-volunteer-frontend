var Parse = require('parse');
require('dotenv').config();
Parse.initialize(process.env.REACT_APP_BACKEND_APP_ID);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

export function getInitialData () {
  var City = Parse.Object.extend("City");
  var cityQuery = new Parse.Query(City);
  var Opp = Parse.Object.extend("Opportunity");
  var oppQuery = new Parse.Query(Opp);
  oppQuery.descending("createdAt");
  return Promise.all([
    cityQuery.find(),
    oppQuery.find()
  ]).then(([cities, opps]) => ({
    cities,
    opps
  }));
}

export function saveOpp (opp) {
  var Opp = Parse.Object.extend("Opportunity");
  var oppObject = new Opp();
  return oppObject.save(opp);
}

export function saveSignup (signup) {
  var SignUp = Parse.Object.extend("SignUp");
  var signupObject = new SignUp();
  return signupObject.save(signup);
}
