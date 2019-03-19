const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    street:"",
    city:"",
    state:"",
    zip:""
});

const MenuSchema = new mongoose.Schema({
    item_name:"",
    item_type:"",
    description:"",
    vegetarian:Boolean,
    price:Number
});

const ProviderSchema = new mongoose.Schema({
    provider_name:"",
    owner:[String],
    provider_type:"",
    email:String,
    password:String,
    address:[AddressSchema],
    provider_menu:[MenuSchema],
    provider_orders:{
        orders_id:[Number]
    },
    time_open:[Date],
    time_closed:[Date],
    image:""
});
module.exports = mongoose.model('Provider', ProviderSchema)
