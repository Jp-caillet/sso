// AuthController.js
const validator = require('node-validator')
var passportFacebook= require('./facebook.js')

module.exports = class Authentification {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/auth/facebook',
  passportFacebook.authenticate('facebook'));

this.app.get('/auth/facebook/callback',   passportFacebook.authenticate('facebook'), // complete the authenticate using the google strategy
  (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
    if (err.name === 'TokenError') {

     res.status(200).json(req.user) // redirect them back to the login page
    } else {

    res.redirect(`/profile?name=${req.user._json.name}&con=facebook`)
    
    }
  })
  }

  /**
   * Run
   */
   run () {
    this.middleware()
  }
}


