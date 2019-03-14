const express = require('express');
const bodyParser = require('body-parser');
const kitchenRoute = express.Router()
const Kitchen = require('../models/Kitchen');

kitchenRoute.use(bodyParser.urlencoded({extended:true}));
kitchenRoute.use(bodyParser.json());

kitchenRoute.get('/api/kitchens/', (req, res, next) =>{
    Kitchen.find(function(err, kitchens){
        if(err)console.error(`An error occured ${err}`);
        res.json(kitchens);
    })
})

kitchenRoute.get('/api/kitchens/:id', (req, res, next) =>{
    Kitchen.findById(id, function(err, kitchens){
        if(err)console.error(`An error occured ${err}`);
        res.json(kitchens);
    })
})

kitchenRoute.post('/api/kitchen/new', (req, res, next) =>{
    Kitchen.create(req.body, function(err, new_kitchen){
        if(err)console.error(`An error occured ${err}`);
        res.json(new_kitchen);
    })
})

kitchenRoute.put('/api/kitchen/update/:id', (req, res, next) =>{
    Kitchen.findByIdAndUpdate(id, req.body, {new:true}, function(err, updated_kitchen){
        if(err)console.error(`An error occured ${err}`);
        res.json(updated_kitchen);
    });
});

kitchenRoute.delete('api/kitchen/delete/:id', (req, res, next) =>{
    Kitchen.findByIdAndDelete(id, function(err){
        if(err)console.error(`An error occured ${err}`);
        res.sendStatus(200);
    })
})

module.exports = kitchenRoute;