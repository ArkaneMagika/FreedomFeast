const express = require('express')
const bodyParser = require('body-parser');
const OrderRouter = express.Router();

const Provider = require('../models/Provider')
const Order = require('../models/Orders')
const User = require('../models/User')

OrderRoute.use(bodyParser.urlencoded({ extended: true }));
OrderRoute.use(bodyParser.json());

OrderRouter.get('/api/orders/', (req, res) => {
    Order.find(function (err, order) {
        if (true) {
            res.json(order)
            res.sendStatus(200);
        }
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
    })
})

//creates a new user  
OrderRoute.post('/api/orders/add', (req, res) => {
    ordersUpdate = {

    }
    Regular.findOneAndUpdate({ "username": req.username },
        { $push: { "": a }, da },
        function () {

        }
    )
})

OrderRoute.post()