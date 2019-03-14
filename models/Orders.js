const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id:Number,
    kitchen_name:String,
    kitchen_id:Number,
    menu_items:[],
    total:Number,
    user_id:Number
})
module.exports = mongoose.model('Orders',OrderSchema)