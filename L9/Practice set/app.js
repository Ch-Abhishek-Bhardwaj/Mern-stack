const express =require('express');

const app=express();

app.get("/",(req,res,next) =>{
    console.log("handling  / for get ",req.url,req.method);
    next();
});


app.get("/contact-us",(req,res,next) =>{
    console.log("Handling contact us",req.url,req.method);
    res.send(`
        <h1> Please Give your details <h1>
        <form action ="/contact-us" method ="POST">

        <input type="text" name ="name" placeholder ="Enter your name"/>
        <input type="email" name ="email" placeholder ="Enter your Email"/>

        <input type="submit"/>

        </form>
        `)
    next();
});

app.post("/contact-us",(req,res,next) =>{
    console.log("handling post /contact-us ",req.url,req.method);
    res.send(`<h1> We will contact you shortly</h1>`)
    next();
});

// app.use((req,res,next) =>{
//     console.log("Third dummy middleware",req.url,req.method);
//     res.send("<h1>Welcome to Abhishek's repo..</h1>")
//     next();
// });





const PORT =3001;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})