const express = require('express')
const bodyParser = require('body-parser');

const RegisterRoute = express.Router()

const User = require('../models/User');
const Provider = require('../models/Provider');

RegisterRoute.use(bodyParser.urlencoded({ extended: false }))
RegisterRoute.use(bodyParser.json())

RegisterRoute.post('/api/register/user', async (req, res) => {
    User.create(req.body, function onUserRegister(err, user){
        if(err){
            // console.log(err)
            res.sendStatus(403)
        }
        else{
            // console.log(user)
            res.send(200)
            .json(user)
        }
    })
})

RegisterRoute.post('/api/register/provider', async(req, res) =>{
    Provider.create(req.body, function onProviderRegister(err, provider){
        if(err){
            console.log(err)
            res.sendStatus(403)
        }
        else{
            // console.log(res)
            res
            // .send(200)
            .json(provider)
        }
    })
})

module.exports = RegisterRoute