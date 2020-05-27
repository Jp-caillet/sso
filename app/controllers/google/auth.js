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
    console.log('ca passe par la ?')
    if (err.name === 'TokenError') {
    console.log('1')

     res.redirect('/'); // redirect them back to the login page
    } else {
    console.log("2")
    res.status(200).json(req.user)
    
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


