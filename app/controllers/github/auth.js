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
  (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
    console.log("req.user")
    if (err.name === 'TokenError') {
    console.log("tutu")

     res.status(200).json(req.user) // redirect them back to the login page
    } else {

    res.status(200).json(req.user)
    
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
