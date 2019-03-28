// const dotenv = require('dotenv')
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

//Routes

//corse settings
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

//Port
const port = process.env.PORT || 3030 || 4000;

//Mongoose => MongoDB Settings
mongoose.connect("mongodb://localhost:27017/FreedomFeast", {useNewUrlParser:true})
.then(() => console.log(`Your are now connected to MongoDB`)).catch((err) => console.error('Error: Unable to connect'));

//Routes Available
const user = require('./routes/User')
const provider = require('./routes/Provider')
const login = require('./routes/Login')
const register = require('./routes/Register')

app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', `*`);
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    })
    
app.use([
    login,
    user,
    provider,
    register])



//Server starts listening
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
module.exports = app