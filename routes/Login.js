const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const User = require('../models/User');

const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

const LoginRoute = express.Router();
const jwtMiddleware = exjwt({secret:process.env.JWT_SECRET})

LoginRoute.use(bodyParser.urlencoded({extended:true}));
LoginRoute.use(bodyParser.json());

LoginRoute.post('/api/new/login', (req, res) => {
    const {username, password} = req.body;

    var UserQuery = User.where({username:username})
    UserQuery.findOne(function(err, user_search){

        for(user of user_search){

            if(user.username == username){
                token = checkPassword(password, user.password)     
                res.send({
                    token
                })           
            }
            else{
                console.error(`${err}`)
            }
        }       
    })
});

LoginRoute.get('/api/isLoggedIn', jwtMiddleware, (req, res) => {
    res.sendStatus(200);
})

function checkPassword(){
    bcrypt.compare(pass, user_pass, function(err, passCheck){

        if(passCheck){
            const token = jwt.sign(user, process.env.JWT_SECRET,{
                expiresIn:60*2
            });
            return token;
        }
        else{
            console.error(`Passwords do no match: ${err}`)
            return err;
        }
    })
}