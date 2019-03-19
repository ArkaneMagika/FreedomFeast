const express = require('express');
const bodyParser = require('body-parser');
const ProviderRoute = express.Router()
const Provider = require('../models/Provider');


ProviderRoute.use(bodyParser.urlencoded({ extended: true }))
ProviderRoute.use(bodyParser.json())

//GET provider details
ProviderRoute.get('/api/provider/:id', (req, res, next) => {
    Provider.findById(id, function (err, providers) {
        if (err) console.error(`An error occured ${err}`);
        res.json(providers);
    })
})

//Post a Menu
ProviderRoute.post('/api/provider/:id/new-menu', (req, res, next) => {
    Provider.MenuSchema.create(req.body, function (err, new_menu) {
        if (err) console.error(`An error occured ${err}`);
        res.json(new_menu);
        Provider.ProviderSchema.save();
    })
})

//GET Menu W
ProviderRoute.get('/api/provider/:id/menu-list', (req, res, next) => {
    Provider.MenuSchema.findById(id, function (err, providers) {
        if (err) console.error(`An error occured ${err}`);
        res.json(menu_list);
    })
})

//Update provider Details W
ProviderRoute.put('/api/provider/update/:id', (req, res, next) =>{
    Provider.findByIdAndUpdate(id, req.body, {new:true}, function(err, updated_Provider){
        if(err)console.error(`An error occured ${err}`);
        res.json(updated_Provider);
    });

//Update Old Menus W
ProviderRoute.put('/api/provider/update/:id/menu-list', (req, res, next) =>{
    Provider.findByIdAndUpdate(id, req.body, {new:true}, function(err, updated_Provider){
        if(err)console.error(`An error occured ${err}`);
        res.json(updated_Provider);
    });

//DELETE menus W
ProviderRoute.delete('api/kitchen/delete/:id', (req, res, next) =>{
    Provider.findByIdAndDelete(id, function(err){
        if(err)console.error(`An error occured ${err}`);
        res.sendStatus(200);
    })
})

module.exports = ProviderRoute;

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

    module.exports = ProviderRoute
});