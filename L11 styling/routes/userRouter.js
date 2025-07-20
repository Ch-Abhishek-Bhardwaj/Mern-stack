const path =require('path');

const express =require('express');
const userRouter=express.Router();

//local
const rootDir=require("../utils/pathutil")

userRouter.get("/",(req,res,next)=>{
    console.log(req.url,req.method);
    res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports = userRouter; 

