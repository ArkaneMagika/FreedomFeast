const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const UserRoute = express.Router();
const User = require('../models/User');

RegularRoute.use(bodyParser.urlencoded({ extended: true }));
RegularRoute.use(bodyParser.json());

const jwtMiddleware = exjwt({ secret: config.public_key })

//Get details for specific user
UserRoute.get('/api/regular/:id/details', jwtMiddleware, (req, res, next) => {
   User.findById(id, function (err, user_details) {
        if (err) console.error(`An error occured ${err}`);
        res.json(user_details);
    })
});

//Update users details from settings component
RegularRoute.put('/api/regular/update/:id', jwtMiddleware, (req, res, next) => {
    Regular.findByIdAndUpdate(id, req.body, { new: true }, function (err, updated_Regular) {
        if (err) console.error(`An error occured ${err}`);
        res.json(updated_Regular);
    });
});

module.exports = RegularRoute;