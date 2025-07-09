const http = require('http')

// function requestListener(req,res){
//     console.log(req);
// }

const server = http.createServer((req,res)=>{
    console.log(req);
});
const port =3001;

server.listen(port,()=>{
    console.log(`server is running on address http://localhost:${port}`)
});
