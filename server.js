const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

//Routes
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


const port = 3000 || process.env.PORT || 3030 || 4000;

var connection = 'mongodb://localhost:27017';

mongoose.connect("mongodb://localhost:27017/FrredomFeast", {useNewUrlParser:true})
.then(() => console.log(`Your are now connected to MongoDB`)).catch((err) => console.error('Error: Unable to connect'));


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
module.exports = app