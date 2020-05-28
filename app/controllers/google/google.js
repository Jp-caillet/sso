var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


module.exports =  passport.use(new GoogleStrategy({
    clientID: "136910366106-hbfnljg86u7ihskhuledh73b5enb61c4.apps.googleusercontent.com",
    clientSecret: "MLMHVOZD5QDakjHl0SVBsg1u",
    callbackURL: "https://localhost:3000/auth/google/callback"
  },
  // google sends back the tokens and progile info
  function(token, tokenSecret, profile, done) {

  	console.log(token)
  	console.log(tokenSecret)
     done(null, profile)
  }

))

// serialize user into the session



