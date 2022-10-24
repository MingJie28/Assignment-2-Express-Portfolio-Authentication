let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);