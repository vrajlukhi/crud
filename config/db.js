const mongoose = require("mongoose");


const connect = async() =>{
    await mongoose.connect("mongodb+srv://vrajlukhi:vraj@cluster0.h0qqzcb.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0");
    console.log("database is connected");
}

module.exports = connect;