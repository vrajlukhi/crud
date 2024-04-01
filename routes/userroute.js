const express = require("express");
const user = require("../modals/usermodal");
const app2 = express();


app2.get("/" , (req , res) =>{
    res.render("index")
})


app2.post("/create" , async(req , res) =>{
    let {name , email , phone , image} = req.body
    let data = await user.create(req.body);
    res.json(data)
});
module.exports = app2; 