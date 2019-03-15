const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    item_name:"",
    item_type:"",
    description:"",
    vegetarian:Boolean,
    price:Number
});
const AddressSchema = new mongoose.Schema({
    street:"",
    city:"",
    state:"",
    zip:""
});

const KitchenSchema = new mongoose.Schema({
    kitchen_name:"",
    owner:[String],
    kitchen_type:"",
    email:String,
    password:String,
    address:[AddressSchema],
    kitchen_menu:[MenuSchema],
    kitchen_orders:{
        orders_id:[Number]
    },
    time_open:[Date],
    time_closed:[Date],
    image:""
});

module.exports = mongoose.model('Kitchen', KitchenSchema)