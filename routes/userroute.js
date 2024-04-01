const express = require("express");
const user = require("../modals/usermodal");
const Route = express();


Route.get("/" , (req , res) =>{
    res.render("index")
})


Route.post("/create" , async(req , res) =>{
    let {name , email , phone , image} = req.body
    let data = await user.create(req.body);
    res.json(data)
});
module.exports = Route; 