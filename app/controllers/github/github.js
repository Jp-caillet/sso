var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;


passport.use(new GitHubStrategy({
    clientID: "Iv1.a025a7e0e831c6ae",
    clientSecret: "3322320c4ac70d5e81c6d67affc50a48e92eab5d",
    callbackURL: "https://localhost:3000/auth/github/callback"
  },
  // github sends back the tokens and profile info
  function(accessToken, refreshToken, profile, done) {

   done(null, profile)
  }

))

// serialize user into the session



module.exports = passport; 