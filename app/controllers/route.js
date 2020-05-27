//const linkedin = require('./linkedin/auth.js')
const google = require('./google/auth.js')
const github = require('./github/auth.js')

module.exports = {
    auth: {
        //linkedin
        google,
        github
    }
}