const express = require('express');
const bodyParser = require('body-parser');
const userRoute = express.Router();

const User = require('../models/User');

userRoute.use(bodyParser.urlencoded({extended:true}));
userRoute.use(bodyParser.json());

userRoute.use()

userRoute.get('/api/user/:id/details', (req, res, next) =>{
    User.findById(id, function(err, user_details){
        if(err)console.error(`An error occured ${err}`);
        res.json(user_details);
    })
});

userRoute.put('/api/user/update/:id', (req, res, next) =>{
    User.findByIdAndUpdate(id, req.body, {new:true}, function(err, updated_user){
        if(err)console.error(`An error occured ${err}`);
        res.json(updated_user);
    });
});

module.exports = userRoute;