const express = require('express');
const bodyParser = require('body-parser');
const ProviderRoute = express.Router()

const Provider = require('../models/Provider');

ProviderRoute.use(bodyParser.urlencoded({ extended: false }))
ProviderRoute.use(bodyParser.json())

ProviderRoute.get('/api/provider', (req, res, next) => {
    Provider.find(function (err, providers) {
        if (err) {
            console.error(err)
            return next(err)
        }
        else {
            return res.json(providers)
        }
    })
})


//GET Provider Details
ProviderRoute.get('/api/provider', (req, res, next) => {
    Provider.findById(req.query.id, function (err, provider) {
        if (err) {
            console.error(`An error occured ${err}`)
            return next(err);
        }
        else {
            return res.json(provider);
        }
    })
})

//UPDATE Provider Details
ProviderRoute.put('/api/provider', (req, res, next) => {
    Provider.findByIdAndUpdate(req.query.id, req.body, { new: true }, function updateProvider(err, updated_provider) {
        if (err) console.error(`An error occured ${err}`);
        res.json(updated_provider);
    });
});


//Gets Menu Items
ProviderRoute.get('/api/provider/menu', (req, res, next) => {
    console.log(req.query)
    provider_id = req.query.id
    // res.send("Am message has been sent")
    Provider.findById({ '_id': provider_id }, function getMenu(err, provider) {
        if (err) {
            return next(err)
        }
        else {
            console.log(provider)
            return res.json(provider)
        }
    })
})

//Adds Menu Item(s) to Provider.
ProviderRoute.post('/api/provider/menu', (req, res, next) => {
    menuItem = {
        "name": req.body.item_name,
        "type": req.body.item_type,
        "description": req.body.item_description,
        "price": req.body.item_price
    }

    Provider.updateOne({ '_id': req.query.id },
        { $push: { "menu": menuItem } },
        function newMenu(err, provider) {
            if (err) {
                return next(err)
            }
            else {
                console.log(provider)
                return res.json(provider)
            }
        })
})

// ProviderRoute.delete('api/provider/:id/:menu_id', function deleteMenuItem(req, res, next) {
//     menu_item = { "_id": req.params.menu_id }
//     await Provider.deleteOne({ '_id': req.params.id },
//         { $pull: { "menu": menu_item } })
// })

//ProviderRoute.put()
module.exports = ProviderRoute;