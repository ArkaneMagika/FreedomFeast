const express = require('express')
const bodyParser = require('body-parser')

const UserController = require('../controllers/Login.controller')

const exjwt = require('express-jwt');


const LoginRoute = express.Router();
const jwtMiddleware = exjwt({secret: 'This is my Secret Password. Dont let any0n3 f1nd 0ut'})

LoginRoute.use(bodyParser.urlencoded({extended:true}));
LoginRoute.use(bodyParser.json());

LoginRoute.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    
});
LoginRoute.get('/api/login', jwtMiddleware, (req, res) => {
    res.sendStatus(200);
})


module.exports = LoginRoute;

/* let users = [
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
]; */

// for (let user of users) { // I am using a simple array users which i made above
//     if (username == user.username && password == user.password /* Use your password hash checking logic here !*/) {
//         //If all credentials are correct do this
//         let token = jwt.sign({ id: user.id, username: user.username }, 'This is my Secret Password. Dont let any0n3 f1nd 0ut', { expiresIn: 129600 }); // Sigining the token
//         res.json({
//             sucess: true,
//             err: null,
//             token
//         });
//         break;
//     }
//     else {
//         res.status(401).json({
//             sucess: false,
//             token: null,
//             err: 'Username or password is incorrect'
//         });
//     }
// }
// });