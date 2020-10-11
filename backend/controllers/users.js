const asyncHandler=require("express-async-handler");
const User=require('../models/user');


const authUser=asyncHandler(async (req,res)=>{
   
    const {email,password} = req.body;
    const user =await User.findOne({email});
    if (user && await user.matchPassword(password)) {
        return res.json({
            _id:user._id,
            name:user.name,
            email:user.emai,
            isAdmin:user.isAdmin,
            token:null
        })
    } else {
        res.status(401);
        throw new Error("Invalid email or password")
    }
   
})

const getProductById=asyncHandler(async (req,res)=>{
   
})
module.exports={
   authUser
}