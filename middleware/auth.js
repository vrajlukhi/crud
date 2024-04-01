const check = (req , res , next) =>{
    let {name , email , phone , image} = req.body;
    if(!name && !email && !phone && !image){
        res.json("All field are required")
    }
    else{
        next();
    }
}

module.exports = check