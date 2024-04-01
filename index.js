const express = require("express");
const connect = require("./config/db");
const Route = require("./routes/userroute");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine" , "ejs");
app.set("views" + __dirname + "/views");
app.use(Route)
app.listen(8090 , () =>{
    console.log("port is start 8090");
    connect();
})