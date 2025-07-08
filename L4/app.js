const http= require('http')

const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    if (req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Abhishek</title></head>');
    res.write('<body> <h1>Welcome to home page.</strong></body>');
    res.write('</html>');
    return res.end();
    }else if(req.url ==='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Abhishek</title></head>');
    res.write('<body> <h1> This is a product list </strong></body>');
    res.write('</html>');
    return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Abhishek</title></head>');
    res.write('<body> <h1> Please go to Home.</body>');
    res.write('</html>');
    return res.end();

    // process.exit();
});

const PORT= 3002;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})