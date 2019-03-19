const bcrypt = require('bcryptjs')
const config = require('./config')

hashedPass = bcrypt.genSalt(8, function(err, salt) {
    bcrypt.hash('bettyLovesCookin', salt, function(err, hash){
        if (err){}
            return hash.toString()
    })
})

console.log(`${hashedPass}`);