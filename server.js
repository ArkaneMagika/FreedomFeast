// const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const app = express();

//corse settings
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

//Port
const port = process.env.PORT || 3030 || 4000;

//Mongoose => MongoDB Settings
var connection = 'mongodb://localhost:27017/FreedomFeast';
mongoose.connect(connection, {useNewUrlParser:true})
.then(() => console.log(`Connected to MongoDB`)).catch((err) => console.error(`Unable to connect to MongoDB`));


//Routes Available
const user = require('./routes/User')
const provider = require('./routes/Provider')
const login = require('./routes/Login')
const register = require('./routes/Register')

app.use(cors(corsOptions))
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
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

module.exports = app