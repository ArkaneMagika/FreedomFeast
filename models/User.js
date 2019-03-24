const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    orders: {
        order_id: []
    },
});

UserSchema.pre('save', async function genPassword(next) {
    try {
        var salt = await bcrypt.genSalt(10)

        var passwordHashed = await bcrypt.hash(this.password, salt)
        this.password = passwordHashed

    } catch (err) {
        console.error()
        next()
    }
})

// UserSchema.post('findOne', async function checkUser(err, userEmail, next) {
//     if(userEmail == this.email){

//     }
//     else{
//         next()
//     }
// })
// UserSchema.methods.compareUser = async function (err, res, user_email, next) {
//     if (user_email == this.email) {
//         return true;

//     }
//     else {
//         false
//         next('Users did not match')
//     }
// }

UserSchema.statics.comparePassword = async function (inputPassword, userPassword) {
    if (bcrypt.compare(inputPassword, userPassword)) {
        return await true
    }
    else {
        return await false
    }

}

const User = mongoose.model("User", UserSchema, "Users")
module.exports = User