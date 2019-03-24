const mongoose = require('mongoose');
const Provider = require('./Provider')
const User = require('./User')

const OrderSchema = new mongoose.Schema({
    provider_id: {
        type: Number,
        // required:true
    },
    user_id: {
        type: Number,
        // required:true
    },
    menu_items: [],
    total: {
        type: Number,
        // required:true
    },
    created: {
        type:Date,
        default: Date.now
    }
})

//On Order save a query must be made to both Provider and User associated with the Order
//The Method should first save both of the 
OrderSchema.post('save', async function onOrderCreation() {
    await Provider.updateOne({})
    await User.updateOne()
})

OrderSchema.methods.onOrderCreation = async function () {
    // Provider.fin
}

const Order = mongoose.model('Order', OrderSchema, "Orders")
module.exports = Order