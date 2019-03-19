const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

const RegisterRoute = express.Router();

RegisterRoute.use(bodyParser.urlencoded({ extended: true }))
RegisterRoute.use(bodyParser.json())

//ROUTES

//New Regular USer
RegisterRoute.post('/api/register/new_user', (req, res) => {
    let hashedPassword = bcrypt.genSalt(8, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            if (err) { console.log(err) }
            return hash;
        })
    })

    var user_search = User.find(req.body.username)
    if (user_search.email == req.body.email) {
        res.sendStatus(400).send(`Email or username is already being used. Please use another combination`)
    }
    else {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        },
            function (err, user) {
                if (!user) {
                    console.error(`Error when creating new user ${err}`)
                }
                let token = jwt.sign({ id: user._id, username:user.username }, config.secret_key, {
                    expiresIn: 2400
                })
                res.sendStatus(200).send({ auth: true, token: token })
            });
    }
});

//New Provider Routes
RegisterRoute.post('/api/register/new_provider', (req, res) => {
    let hashedPassword = bcrypt.hash(req.body.password, 8);

    var provider_search = Provider.Provider.find(req.body.email)

    if (provider_search.provider_name == req.body.provider_name) {
        res.send(`You cannot use this provider name and email as it is already registered!`);
    }
    else {
        Provider.Provider.create({
            provider_name: req.body.name,
            owner: [req.body.owner],
            provider_type: req.body.type,
            email: req.body.email,
            password: hashedPassword,
            address: [req.body.address],
            provider_menu: [req.body.menu],
            provider_orders: [],
            time_open: req.body.open,
            time_closed: req.body.closed,
            image: req.body.image_url
        },
            function (err, provider) {
                if (err) {
                    console.error(`There was an error when creating your new kitchen ${err}`)
                }
                let token = jwt.sign({ id: provider._id, username: provider.provider_name }, config.secret_key, {
                    expiresIn:2400
                })
                res.sendStatus(200).send({ auth: true, token: token });
            })
    }
})

module.exports = RegisterRoute;