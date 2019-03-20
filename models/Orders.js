const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id:Number,
    kitchen_id:Number,
    kitchen_name:String,
    menu_items:[],
    total:Number,
    user_id:Number
})
module.exports = mongoose.model('Orders',OrderSchema)