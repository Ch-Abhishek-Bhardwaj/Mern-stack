//internal
// const http= require('http');
//external
const express = require('express') ;

//Local
const requestHandler = require('./user');
const app =express();

app.get("/",(req,res,next)=>{
    console.log("Came in first middleware",req.url,req.method);
    // res.send("<p> came from first middleware </p>")
    next();
});


app.use("/submit-details",(req,res,next)=>{
    console.log("Came in Second middleware",req.url,req.method);
    res.send('<p> Welcome to the express.js </p>')
});


app.use("/",(req,res,next)=>{
    console.log("Came in another middleware",req.url,req.method);
    // res.send("<p> came from another middleware </p>");
    next();
});


const PORT= 3001;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})