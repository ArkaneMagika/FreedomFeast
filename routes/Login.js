const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('../config')

const LoginRoute = express.Router()

const User = require('../models/User')
const Provider = require('../models/Provider')

LoginRoute.use(bodyParser.urlencoded({ extended: false }));
LoginRoute.use(bodyParser.json());

LoginRoute.post('/api/login/user', (req, res, next) => {
    User.findOne({ email: req.body.email }, function (err, user) {
        try {
            if (user != null) {
                if (User.comparePassword(req.body.password, user.password)) {
                    console.log('Password matches')

                    let token = jwt.sign({
                        _id: user._id,
                        email: user.email
                    },
                        config.secret_key, { expiresIn: Math.floor(Date.now() / 1000) + (360) });

                    res.json({
                            id: user._id,
                            email: user.email,
                            token: token,
                            expiresIn: Math.floor(Date.now() / 1000) + (360)
                        })

                    next()
                }
                else {
                    console.log(err)
                    next(err)
                }
            }
            else {
                res.status(404, "User cannot be found")
            }
        } catch (error) {

        }

    })
})

LoginRoute.post('/api/login/provider', (req, res) => {
    Provider.findOne({ email: req.body.email }, function providerFind(err, provider) {
        try {
            if (provider != null) {
                if (Provider.comparePassword(req.body.password, provider.password)) {
                    console.log('Password matches')

                    let token = jwt.sign({
                        _id: provider._id,
                        email: provider.email
                    },
                        config.secret_key, { expiresIn: Math.floor(Date.now() / 1000) + (360) });

                    res.json({
                            id: provider._id,
                            email: provider.email,
                            token: token,
                            expiresIn: Math.floor(Date.now() / 1000) + (360)
                        })
                }
                else {
                    console.log(err)
                    next(err)
                }
            } else {
                res.status(404, "User cannot be found")
            }
        } catch (err) {
            console.log(err)
        }

    })
})

module.exports = LoginRoute