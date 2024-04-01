const express = require("express");
const connect = require("./config/db");
const app2 = require("./routes/userroute");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine" , "ejs");
app.set("views" + __dirname + "/views");
app.use(app2)
app.listen(8090 , () =>{
    console.log("port is start 8090");
    connect();
})