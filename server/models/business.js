// business.js, Ming Jie Wang, 301188372, Oct.24,2022
let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);