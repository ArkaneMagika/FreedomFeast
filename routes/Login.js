const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const exjwt = require('express-jwt');
const jwt = require('jsonwebtoken')
const config = require('../config')

const User = require('../models/User');
const Provider = require('../models/Provider')

const LoginRoute = express.Router();
const jwtMiddleware = exjwt({ secret: config.public_key })

LoginRoute.use(bodyParser.urlencoded({ extended: true }));
LoginRoute.use(bodyParser.json());

LoginRoute.post('/api/user/login', (req, res) => {
    User.findOne({ username: req.body.username }, function checkDB(err, user) {
        if (bcrypt.compare(req.body.password, user.password,
            function respondIfTrue(err, res, next) {
                if (res) {
                    let token = jwt.sign({ id: user._id }, config.public_key, {
                        expiresIn: '2h'
                    });
                    res.sendStatus(200).json({
                        status: "success", message: "user found", data: { username: user.username, id: user._id, token: token }
                    });
                }
                else {
                    next(err)
                }
            }
        )) { }
        else {
            res.sendStatus(401).json({ status: "error", message: `Invalid email/password!!! ${err}`, data: null })
        }
    })
});

LoginRoute.get('/api/user/login', jwtMiddleware, (req, res) => {

    res.sendStatus(200);
})


module.exports = LoginRoute;
