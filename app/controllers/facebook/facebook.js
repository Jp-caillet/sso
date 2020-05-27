var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;


module.exports =  passport.use(new FacebookStrategy({
    clientID: "3269916619699441",
    clientSecret: "63c81a89c05cfede603115fe6610215a",
    callbackURL: "http://localhost:3000//auth/facebook/callback",
  },
  // google sends back the tokens and progile info
  function(token, tokenSecret, profile, done) {

  	console.log(token)
  	console.log(tokenSecret)
     done(null, profile)
  }

))

// serialize user into the session



// jp78920@gmail.com
// test123test