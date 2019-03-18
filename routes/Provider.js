const express = require('express');
const bodyParser = require('body-parser');
const ProviderRoute = express.Router()
const Provider = require('../models/Provider');


ProviderRoute.use(bodyParser.urlencoded({ extended: true }))
ProviderRoute.use(bodyParser.json())

ProviderRoute.get('/api/providers/:id', (req, res, next) => {
    Provider.findById(id, function (err, providers) {
        if (err) console.error(`An error occured ${err}`);
        res.json(providers);
    })
})

ProviderRoute.post('/api/provider/:id/new-menu', (req, res, next) => {
    Provider.MenuSchema.create(req.body, function (err, new_menu) {
        if (err) console.error(`An error occured ${err}`);
        res.json(new_menu);
        Provider.ProviderSchema.save();
    })
})
// ProviderRoute.get('/api/providers/', (req, res, next) =>{
//     provider.find(function(err, providers){
//         if(err)console.error(`An error occured ${err}`);
//         res.json(providers);
//     })
// })


// ProviderRoute.post('/api/provider/new', (req, res, next) =>{
//     provider.create(req.body, function(err, new_provider){
//         if(err)console.error(`An error occured ${err}`);
//         res.json(new_provider);
//     })
// })

ProviderRoute.put('/api/provider/update/:id', (req, res, next) => {
    provider.findByIdAndUpdate(id, req.body, { new: true }, function (err, updated_provider) {
        if (err) console.error(`An error occured ${err}`);
        res.json(updated_provider);
    });
});

module.exports = ProviderRoute;