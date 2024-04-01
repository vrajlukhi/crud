const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    phone :{type : String},
    image:{type: String},
    status : {type : Boolean , default : true},
    created_date : {type : String , default : Date.now},
    updated_date : {type : String , default : Date.now}
})

const user = mongoose.model('userdata' , userSchema)

module.exports = user;