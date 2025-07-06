const http= require('http');
const requestHandler = require('./user');// to Import Modules


const server = http.createServer(requestHandler);


const PORT= 3002;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})