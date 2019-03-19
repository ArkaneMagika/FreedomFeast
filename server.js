const dotenv = require('dotenv')
const express = require('express');
<<<<<<< HEAD
const app = express();
=======
>>>>>>> development
const cors = require('cors');
const mongoose = require('mongoose');

<<<<<<< HEAD
//Routes
=======
const app = express();

//corse settings
>>>>>>> development
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


//Port
const port = process.env.PORT || 3030 || 4000;

<<<<<<< HEAD
var connection = 'mongodb://localhost:27017';

mongoose.connect("mongodb://localhost:27017/FrredomFeast", {useNewUrlParser:true})
.then(() => console.log(`Your are now connected to MongoDB`)).catch((err) => console.error('Error: Unable to connect'));

=======
//Mongoose => MongoDB Settings
var connection = 'mongodb://localhost:27017/FreedomFeast';
mongoose.connect(connection, {useNewUrlParser:true})
.then(() => console.log(`Connected to MongoDB`)).catch((err) => console.error(`Unable to connect to MongoDB`));


//Routes Available
const regular_user = require('./routes/User')
const provider = require('./routes/Provider')
const login = require('./routes/Login')
const register = require('./routes/Register')

// app.use(dotenv) //Dot env 
app.use(cors(corsOptions))
app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', `http://localhost:${port}`);
        res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
        next();
    })
    
// app.use('api/users/provider', provider),
app.use([
    regular_user,
    login,
    register])
// app.use(login),
// app.use(register)


//Server starts listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
>>>>>>> development

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
module.exports = app