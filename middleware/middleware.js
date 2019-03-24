const jwt = require('jsonwebtoken');
const config = require('../config');

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        token = token.splice(7, token.length)
    }

    if (token) {
        jwt.verify(token, config.secret_key, async function decodeToken(err, decoded) {
            if (err) {
                return await res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                await next();
            }
        })
    } else {
        return res.json({
            success:false,
            message: 'Auth token was not supplied'
        })
    }
}

module.exports = { checkToken: checkToken }