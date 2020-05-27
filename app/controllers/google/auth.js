// AuthController.js
const validator = require('node-validator')
var passportGoogle= require('./google.js')

module.exports = class Authentification {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/auth/google',
  passportGoogle.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

this.app.get('/auth/google/callback',   passportGoogle.authenticate('google'), // complete the authenticate using the google strategy
  (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
    
    if (err.name === 'TokenError') {

     res.redirect('/'); // redirect them back to the login page
    } else {
    res.redirect(`/profile?name=${req.user.displayName}&con=google`)
    
    }
  },
  (req, res) => { // On success, redirect back to '/'
    
  })
  }

  /**
   * Run
   */
   run () {
    this.middleware()
  }
}


