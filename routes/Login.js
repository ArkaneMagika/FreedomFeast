const app = require('../server')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('../config')

const LoginRoute = app.Router()

const User = require('../models/User')
const Provider = require('../models/Provider')

LoginRoute.use(bodyParser.urlencoded({ extended: false }));
LoginRoute.use(bodyParser.json());

LoginRoute.post('/api/login/user', (req, res, next) => {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (User.comparePassword(req.body.password, user.password)) {
            console.log('Password matches')

            let token = jwt.sign({
                _id: user._id,
                email: user.email
            },
                config.secret_key, { expiresIn: Math.floor(Date.now() / 1000)+(360) });

            res.status(200)
                .json({
                    id: user._id,
                    email: user.email,
                    token: token,
                    expiresIn: Math.floor(Date.now() / 1000)+(360)
                })

            next()
        }
        else {
            console.log(err)
            next(err)
        }
    })
})

LoginRoute.post('api/user/login', (req, res) => {
    Provider.findOne({ email: req.body.email }, function providerFind(err, provider) {
        if (Provider.comparePassword(req.body.password, user.password)) {
            console.log('Password matches')

            let token = jwt.sign({
                _id: provider._id,
                email: provider.email
            },
                config.secret_key, { expiresIn: Math.floor(Date.now() / 1000)+(360) });

            res.status(200)
                .json({
                    id: user._id,
                    email: provider.email,
                    token: token,
                    expiresIn: Math.floor(Date.now() / 1000)+(360)
                })

            next()
        }
        else {
            console.log(err)
            next(err)
        }
    })
})

module.exports = LoginRoute


/* const user = User.find({ email: req.body.email })

if (user) {
    try {
         if (bcrypt.compare(req.body.password, user.password)) {
            let token = jwt.sign({
                _id: user._id,
                email: user.email
            },
            config.secret_key, { expiresIn: '5h' });

            res.status(200)
                .json({
                    id: user._id,
                    email: user.email,
                    token: token,
                })
        }
        else {
            res.status(403)
                .send('User and password do not match')
            console.log(err)
            next()
        }
    } catch (error) {
        console.log("Unable to find requested user.")
        next()

    }
} */