const mongoose = require('mongoose');

const KitchenSchema = new mongoose.Schema({
    kitchen_name:"",
    owner:[],
    kitchen_type:"",
    address:[Address],
    kitchen_menu:[MenuSchema],
    kitchen_orders:{
        orders_id:[]
    },
    image:""
});

const MenuSchema = new mongoose.Schema({
    item_name:"",
    item_type:"",
    description:"",
    vegetarian:Boolean,
    price:Number
});
const Address = new mongoose.Schema({
    street:"",
    city:"",
    state:"",
    zip:""
});

module.exports = mongoose.model('Kitchen', KitchenSchema)