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

this.app.get('/auth/google/callback',   passportGoogle.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.status(200).json(req.user)
  })
  }

  /**
   * Run
   */
   run () {
    this.middleware()
  }
}
