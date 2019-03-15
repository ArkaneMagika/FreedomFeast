const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')

const registerRoute = express.Router();

const User = require('../models/User');
const Kitchen = require('../models/Kitchen');

registerRoute.use(bodyParser.urlencoded({extended:true}));
registerRoute.use(bodyParser.json());



//ROUTES

registerRoute.post('/api/register/new_user', (req, res) =>{
    let hashedPassword = bcrypt.hash(req.body.password, 8);

    var user_search = User.find(req.body.username)
    if(user_search.email == req.body.email){
        res.send(`Email or username is already being used. Please use another combination`)
    }
    else{
        User.create({
            username: req.body.username,
            email:req.body.email,
            password:hashedPassword
        },
        function(err, user){
            if(!user){
                console.error(`Error when creating new user ${err}`)
            }
            res.sendStatus(200)
        });
    }
});

registerRoute.post('/api/register/new_kitchen', (req, res) => {
    let hashedPassword = bcrypt.hash(req.body.password, 8);

    var kitchen_search = Kitchen.find(req.body.email)

    if(kitchen_search.kitchen_name == req.body.kitchen_name){
        res.send(`You cannot use this kitchen name and email as it is already registered!`);
    }
    else{
        Kitchen.create({
            kitchen_name:req.body.name,
            owner:[req.body.owner],
            kitchen_type:req.body.type,
            email:req.body.email,
            password:hashedPassword,
            address:[req.body.address],
            kitchen_menu:[req.body.menu],
            kitchen_orders:[0],
            time_open:req.body.open,
            time_closed:req.body.closed,
            image:req.body.image_url
        },
        function(err, kitchen){
            if(!kitchen){
                console.error(`There was an error when creating your new kitchen ${err}`)
            }
            res.sendStatus(200);
        })
    }
})

module.exports = registerRoute;