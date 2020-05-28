// Dependencie
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const server = require('https')
const fs = require('fs')
const path = require('path')


// Core
const routes = require('./controllers/route.js')

/**
 * Server
 */
module.exports = class Server {
    constructor() {
        this.app = express()
        this.server = server.createServer({
            key: fs.readFileSync(__dirname +"/localhost.key"),
            cert: fs.readFileSync(__dirname +"/localhost.cert")
        }, this.app)
        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.use(compression())
        this.app.use(cors())
        this.app.use(express.static(__dirname + '/public'))
        this.app.use(bodyParser.urlencoded({
            'extended': true
        }))
        this.app.use(bodyParser.json())
    }

    /**
     * Routes
     */
    routes() {

        // new routes.auth.linkedin(this.app)
        this.app.get('/profile', function(req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "profile.html"), {dotfiles: "allow"});
});

        new routes.auth.google(this.app)
        new routes.auth.facebook(this.app)
        new routes.auth.github(this.app)

        // If route not exist
        this.app.use((req, res) => {
            res.status(404).json({
                'code': 404,
                'message': 'Not Found'
            })
        })
    }

    /**
     * Security
     */
    security() {
        this.app.use(helmet())
        this.app.disable('x-powered-by')
    }

    /**
     * Run
     */
    run() {
        this.security()
        this.middleware()
        this.routes()
        this.server.listen(3000)
        console.log('connected port 3000')
    } catch (e) {
        console.error(`[ERROR] Server -> ${e}`)
    }
}