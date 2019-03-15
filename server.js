const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//corse settings
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

const port = 3000 || process.env.PORT || 3030 || 4000;

//Mongoose => MongoDB Settings
var connection = 'mongodb://localhost:27017/FreedomFeast';
mongoose.connect(connection, {useNewUrlParser:true})
.then(() => console.log(`Connected to MongoDB`)).catch((err) => console.error(`Unable to connect to MongoDB`));


//Routes Available
const kitchen = require('./routes/Kitchen')
app.use('kitchen',kitchen);


//Server starts listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

module.exports = app, jwt, jwtMiddleware