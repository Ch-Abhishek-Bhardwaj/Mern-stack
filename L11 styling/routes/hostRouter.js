//core module
const path =require('path')

const express =require('express');
const hostRouter=express.Router();

//local
const rootDir= require("../utils/pathutil")

hostRouter.get("/add-home",(req,res,next)=>{
    console.log(req.url,req.method);
    res.sendFile(path.join(rootDir,'views','addhome.html'));
})

hostRouter.post("/add-home",(req,res,next)=>{
    console.log(req.body);
   res.sendFile(path.join(rootDir,'views','homeadded.html'));
})
module.exports = hostRouter;