const mongoose = require('mongoose');

const locationsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
});

module.exports = mongoose.model("locations", locationsSchema);