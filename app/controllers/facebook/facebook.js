const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy


 passport.use(new FacebookStrategy({
    clientID: "3269916619699441",
    clientSecret: "63c81a89c05cfede603115fe6610215a",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
  },
  // google sends back the tokens and progile info
  function(token, tokenSecret, profile, done) {

     done(null, profile)
  }

))

// serialize user into the session
module.exports = passport


// jp78920@gmail.com
// test123test