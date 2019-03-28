const express = require('express');
const bodyParser = require('body-parser');
const ProviderRoute = express.Router()

const Provider = require('../models/Provider');

ProviderRoute.use(bodyParser.urlencoded({ extended: false }))
ProviderRoute.use(bodyParser.json())

//Get All Providers(For User View)
ProviderRoute.get('/api/provider', (req, res, next) => {
    Provider.find({}, "name specialty", function (err, providers) {
        if (err) {
            console.error(err)
            return next(err)
        }
        else {
            // console.log(providers)
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
    Provider.findByIdAndUpdate(req.query.id, req.body, { new: true },
        function updateProvider(err, updated_provider) {
            if (err) {
                console.error(`An error occured ${err}`);
                next(err)
            }
            res.json(updated_provider);
        });
});


//Gets Menu Items
ProviderRoute.get('/api/provider/menu', (req, res, next) => {
    // console.log(req.query)
    provider_id = req.query.id
    Provider.findById({ '_id': provider_id },
        function getMenu(err, provider) {
            if (err) {
                return next(err)
            }
            else {
                // console.log(provider.menu)
                return res.json(provider.menu)
            }
        })
})

//Adds Menu Item(s) to Provider.
ProviderRoute.post('/api/provider/menu', (req, res, next) => {
    menuItem = {
        "id": req.body.id,
        "name": req.body.name,
        "type": req.body.type,
        "description": req.body.description,
        "price": req.body.price
    }
    Provider.updateOne(
        {
            '_id': req.query.id
        },
        {
            $push:
            {
                "menu": menuItem
            }
        },
        function newMenu(err, provider) {
            if (err) {
                return next(err)
            }
            else {
                // console.log(provider)
                return res.json(provider.menu)
            }
        })
})

//Updates a Menu Item from Provider
ProviderRoute.put('/api/provider/menu', (req, res, next) => {
    providerQuery = req.query.id
    menuItemData = [{
        "_id": req.body._id,
        "name": req.body.name,
        "type": req.body.type,
        "description": req.body.description,
        "price": req.body.price
    }]
    console.log(menuItemData)
    console.log(req.query._id)
    console.log(providerQuery)

    Provider.updateOne({
        "_id": providerQuery,
        "menu._id": menuItemData._id
    },
        {
            "$push":
            {
                // "menu.$.name": menuItemData.name,
                // "menu.$.type": menuItemData.type,
                // "menu.$.description": menuItemData.description,
                // "menu.$.prcie":menuItemData.price
                "menu": menuItemData
            }
        },
        function (err, provider) {
            if (err) {
                // console.log(provider)
                return next(err)
            }
            if (provider == null) {
                console.log("Provider not found")
                console.log(providerQuery)
                next()
            }
            else {
                console.log(provider)
                console.log(providerQuery)
                // next()
                return res.json(provider)
            }
        })
    // .then((results) => {
    //     console.log(results)
    // })
    // .catch(e => console.log(e))
})

//Delete a Menu Item from Provider
ProviderRoute.delete('/api/provider/menu', (req, res, next) => {
    menuItem = {
        "id": req.body._id,
        "name": req.body.name,
        "type": req.body.type,
        "description": req.body.description,
        "price": req.body.price
    }
    Provider.updateOne(
        { 'menu._id': menuItem.id },
        {
            "$pull": {
                "menu": { _id: req.body._id }
            }
        }
        ,
        function deleteMenu(err, provider) {
            if (err) {
                return next(err)
            }
            else {
                console.log(provider)
                // return res.json(provider.menu)
            }
        })
})

module.exports = ProviderRoute;