// AuthController.js
const validator = require('node-validator')
var passportGithub = require('./github.js')

module.exports = class Authentification {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/auth/github',
  passportGithub.authenticate('github'));

this.app.get('/auth/github/callback', passportGithub.authenticate('github', { failureRedirect: '/login' }),
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
