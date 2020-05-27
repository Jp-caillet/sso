//const linkedin = require('./linkedin/auth.js')
const google = require('./google/auth.js')
const facebook = require('./facebook/auth.js')
const github = require('./github/auth.js')

module.exports = {
    auth: {
        //linkedin
        google,
        facebook,
        github
    }
}