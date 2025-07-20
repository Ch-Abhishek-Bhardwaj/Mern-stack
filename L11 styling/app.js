//core module
const path =require('path');
//external module
const express =require('express');

//local module
const userRouter=require("./routes/userRouter")
const hostRouter =require("./routes/hostRouter")
const rootDir = require("./utils/pathutil");

const app =express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir,"public")))
app.use(userRouter);

app.use("/host",hostRouter);




app.use((req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})



const PORT =3001;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})