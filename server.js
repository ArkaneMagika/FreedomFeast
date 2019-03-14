const express = require('express');
const app = express;
const cors = require('cors');
const mongoose = require('mongoose')

//Routes
app.use()

app.use(cors(corsOptions))
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

const port = 3000 || process.env.PORT || 3030 || 4000;

var connection = 'mongodb://localhost:27017/FreedomFeast';

mongoose.connect(connection, {useNewUrlParser:true})
.then(() => console.log()).catch((err) => console.error());

module.exports = app