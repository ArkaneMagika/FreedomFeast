const express = require('express');
const bodyParser = require('body-parser');

const registerRoute = express.Router();
const loginRoute = express.Router();

const User = require('../models/User');
const Kitchen = require('../models/Kitchen');
const authenticate = require('../controller/authenticate');

registerRoute.use(bodyParser.urlencoded({extended:true}));
registerRoute.use(bodyParser.json());

loginRoute.use(bodyParser.urlencoded({extended:true}));
loginRoute.use(bodyParser.json());

//ROUTES
loginRoute.get('/api/login');

registerRoute.get();
register.post('/api/register/new/user', (req, res) =>{
    User.create(req.body)
});

register.post('/api/register/new/kitchen_provider', (req, res) =>{

});

module.exports = loginRoute, registerRoute;