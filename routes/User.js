const express = require('express');
const bodyParser = require('body-parser');
const RegularRoute = express.Router();

const Regular = require('../models/User');

RegularRoute.use(bodyParser.urlencoded({extended:true}));
RegularRoute.use(bodyParser.json());


RegularRoute.get('/api/regular/:id/details', (req, res, next) =>{
    Regular.findById(id, function(err, Regular_details){
        if(err)console.error(`An error occured ${err}`);
        res.json(Regular_details);
    })
});

RegularRoute.put('/api/regular/update/:id', (req, res, next) =>{
    Regular.findByIdAndUpdate(id, req.body, {new:true}, function(err, updated_Regular){
        if(err)console.error(`An error occured ${err}`);
        res.json(updated_Regular);
    });
});

module.exports = RegularRoute;