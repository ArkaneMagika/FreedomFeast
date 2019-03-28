const express = require('express')
const bodyParser = require('body-parser');
const OrderRouter = express.Router();

const Provider = require('../models/Provider')
const Order = require('../models/Order')
const User = require('../models/User')

OrderRoute.use(bodyParser.urlencoded({ extended: true }));
OrderRoute.use(bodyParser.json());

OrderRouter.get('/api/users/orders', (req, res) => {
    Order.findById(function (err, order) {
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
Order.Router.get('/api/provider/orders', (req, res) => {
    Order.findById
})

//creates a new order
OrderRoute.post('/api/orders', (req, res) => {
    Order.create({
        kitchen_id: req.body.kitchen_id,
        kitchen_name: req.body.kitchen_name,
        menu_items: [req.body.menu_items],
        total: req.body.total,
        user_id: req.body.user_id
    }), function(err, order){
        res.sendStatus(200).send({})
    }

    Provider.findOneAndUpdate({
        provider_orders:[req.body],
        function(params){

        }
    })
    
    User.findOneAndUpdate({
        user_orders:[req.body],
        function (params) {
            
        }
    })
})

module.export = OrderRoute