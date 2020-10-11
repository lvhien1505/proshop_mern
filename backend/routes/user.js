const express=require('express');
const router=express.Router();

const {authUser} =require('../controllers/users')


router.post("/login",authUser)





module.exports=router;