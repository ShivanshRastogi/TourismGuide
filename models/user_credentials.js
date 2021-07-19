const mongoose = require('mongoose');

const userCredentialsSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username : String,
    password : String,
    email : String,
    fName : String,
    lName : String,
    phone : String,
    dob : String,
    gender : String,
});

module.exports = mongoose.model("User_Credentials", userCredentialsSchema);