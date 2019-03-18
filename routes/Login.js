const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const User = require('../models/User');

const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

let users = [
    {
        id: 1,
        username: 'test',
        password: 'asdf123',
        type:1
    },
    {
        id: 2,
        username: 'test2',
        password: 'asdf12345',
        type:2
    }
];

const LoginRoute = express.Router();
const jwtMiddleware = exjwt({secret: 'This is my Secret Password. Dont let any0n3 f1nd 0ut'})

LoginRoute.use(bodyParser.urlencoded({extended:true}));
LoginRoute.use(bodyParser.json());

LoginRoute.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    for (let user of users) { // I am using a simple array users which i made above
        if (username == user.username && password == user.password /* Use your password hash checking logic here !*/) {
            //If all credentials are correct do this
            let token = jwt.sign({ id: user.id, username: user.username }, 'This is my Secret Password. Dont let any0n3 f1nd 0ut', { expiresIn: 129600 }); // Sigining the token
            res.json({
                sucess: true,
                err: null,
                token
            });
            break;
        }
        else {
            res.status(401).json({
                sucess: false,
                token: null,
                err: 'Username or password is incorrect'
            });
        }
    }
});

LoginRoute.get('/api/login', jwtMiddleware, (req, res) => {
    res.sendStatus(200);
})


module.exports = LoginRoute;
// var UserQuery = User.where({username:username})
// UserQuery.findOne(function(err, user_search){

//     for(user of user_search){

//         if(user.username == username){
//             token = checkPassword(password, user.password)     
//             res.send({
//                 token
//             })           
//         }
//         else{
//             console.error(`${err}`)
//         }
//     }       
// })