const mongoose = require('mongoose');

const placesSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    place : String,
    name : String,
    review : String
});

module.exports = mongoose.model("places", placesSchema);