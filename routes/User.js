const app = require('../server');
const bodyParser = require('body-parser');

const UserRoute = app.Router();

const User = require('../models/User');
const Order = require('../models/Orders')
const middleware = require('../middleware/middleware')

UserRoute.use(bodyParser.urlencoded({ extended: false }));
UserRoute.use(bodyParser.json());


//Get details for specific user
UserRoute.get('/api/user/:id/details', middleware.checkToken, (req, res, next) => {
   User.findById({id:req._id}, function (err, user_details) {
        if (err){
            console.error(`An error occured ${err}`);
            next()
        }
        res.json(user_details);
    })
});

//Update users details from settings component
UserRoute.put('/api/user/update/:id', middleware.checkToken, (req, res, next) => {
    Regular.findByIdAndUpdate({id, user:req.body}, { new: true }, function (err, updated_user) {
        if (err) {
            console.error(`An error occured ${err}`);
        }
        res.json(updated_user);
    });
});

//Get Order History
UserRoute.get('/api/user/order-history', middleware.checkToken, (req, res, next) =>{
    User.findById({id:req._id}, function findUser(err, user){
        if(err){
            console.log(err)
        }
        else{
            Order.findById(user.order)
        }
    })
})

module.exports = UserRoute;