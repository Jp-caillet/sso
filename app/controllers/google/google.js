var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(new GoogleStrategy({
    clientID: "656892878336-0ie79puot0gp7l734mk7nd3llb1ml66l.apps.googleusercontent.com",
    clientSecret: "uxPUb5N1x5cskVc2dtgUOYoM",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  // google sends back the tokens and progile info
  function(token, tokenSecret, profile, done) {

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id
    };

    var options = {
      upsert: true
    };
    console.log(profile)
  }

))

// serialize user into the session



module.exports = passport;