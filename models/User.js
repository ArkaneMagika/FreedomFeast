const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id:Number,
    username: "",
    email:"",
    password:"",
    user_orders:{
        order_id:[]
    }   
});

module.exports = mongoose.model('Regular', UserSchema)