const mongoose = require('mongoose');
const config = require('../config')
const bcrypt = require('bcryptjs');

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        // required:true
    },
    city: {
        type: String,
        // required:true
    },
    state: {
        type: String,
        // required:true
    },
    zip: {
        type: String,
        // required:true
    },
});

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        // required:true
    },
    type: {
        type: String,
        // requried:true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
});

const ProviderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    owner: {
        type: [String]
    },
    specialty: {
        type: String
    },
    email: {
        type: String,
        // required:true
    },
    password: {
        type: String,
        // required:true
    },
    address: {
        type: [AddressSchema],
        // required:true
    },
    menu: {
        type: [MenuSchema],
        // required:true
    },
    orders: {
        orders_id: {
            type: [Number]
        }
    },
    date_opened: {
        type: Date,
        // required:true
    },
    time_opened: {
        type: String,
        // required:true
    },
    image_path: {
        type: String
    }
});

ProviderSchema.pre('save', async function genPassword(next) {
    try {
        var salt = await bcrypt.genSalt(10, config.secret_key)

        var passwordHashed = await bcrypt.hash(this.password, salt)
        this.password = passwordHashed
        next()

    } catch (error) {
        console.log(error)
        next()
    }
}
)

ProviderSchema.statics.comparePassword = async function (inputPassword, providerPassowrd) {
    if(bcrypt.compare(inputPassword,providerPassowrd)){
        return await true;
    }
    else{
        return await false
    }
}
const Provider = mongoose.model('Provider', ProviderSchema, "Providers")
module.exports = Provider
