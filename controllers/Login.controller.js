const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

class LoginController {

    checkUser(username) {
        UserQuery = User.where({ username: username })
        UserQuery.findOne(function (err, user_search) {

            for (user of user_search) {

                if (user.username == username) {
                    token = checkPassword(password, user.password)
                    res.send({
                        token
                    })
                }
                else {
                    console.error(`${err}`)
                }
            }
        })
    }

    checkPassword(pass, user_pass) {
        bcrypt.compare(pass, user_pass, function (err, passCheck) {

            if (passCheck) {
                const token = jwt.sign(user, process.env.JWT_SECRET, {
                    expiresIn: 60 * 2
                });
                return token;
            }
            else {
                console.error(`Passwords do no match: ${err}`)
                return err;
            }
        })
    }
}

exports.LoginController = LoginController