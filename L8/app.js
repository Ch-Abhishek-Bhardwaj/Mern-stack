const http= require('http');

const requestHandler = require('./user');


const server = http.createServer(requestHandler);



// const syntax =require('./syntax');
// const runtime =require('./runtime');
// const logical =require('./logical')

// const testingsyntax = require('./syntax');
// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     testingsyntax();
//     runtime();
//     logical();
// });


const PORT= 3001;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})