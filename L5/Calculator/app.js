const http =require('http');
const { requestHandler } = require('./Handler');

const server = http.createServer(requestHandler);

const PORT =3004;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})