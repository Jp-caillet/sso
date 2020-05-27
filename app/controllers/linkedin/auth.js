// AuthController.js
const validator = require('node-validator')
var passportLinkedIn = require('./linkedin.js')

module.exports = class Authentification {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/auth/linkedin', passportLinkedIn.authenticate('linkedin'))
    this.app.get('/auth/linkedin/callback',
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  })
  }

  /**
   * Run
   */
   run () {
    this.middleware()
  }
}
