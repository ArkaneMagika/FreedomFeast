const express = require('express');
const bodyParser = require('body-parser');
const ProviderRoute = express.Router()

const Provider = require('../models/Provider');
const ProviderController = require('../controllers/Provider.controller')

ProviderRoute.use(bodyParser.urlencoded({ extended: true }))
ProviderRoute.use(bodyParser.json())

//GET Provider Details
ProviderRoute.get('/api/providers/:id', (req, res, next) => {
    Provider.findById(id, function (err, providers) {
        if (err) console.error(`An error occured ${err}`);
        res.json(providers);
    })
})

//UPDATE Provider Details
ProviderRoute.put('/api/provider/update/:id', (req, res, next) => {
    provider.findByIdAndUpdate(id, req.body, { new: true }, function (err, updated_provider) {
        if (err) console.error(`An error occured ${err}`);
        res.json(updated_provider);
    });
});

//Adds Menu Item(s) to Provider.
ProviderRoute.put('/api/provider/:id/new-menu', (req, res, next) => {
    
})

ProviderRoute.put()
module.exports = ProviderRoute;