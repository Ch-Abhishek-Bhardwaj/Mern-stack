const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.url==='/home'){
        res.write('<h1>Welocome to Home</h1>');
    }else if(req.url==='/men'){
        res.write('<h1>Welcome to mens Section</h1>');
    }else if(req.url==='/women'){
        res.write('<h1>Welcome to womens Section</h1>');
    }else if(req.url==='/kids'){
        res.write('<h1>Welcome to kid Section</h1>');
    }else if(req.url==='/cart'){
        res.write('<h1>Welcome to cart Section');
    }

    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <head>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">🛒</a></li>
        </ul>
    </head>
    
</body>
</html>
        `);
    res.end();
});
server.listen(30005, () => {
    console.log('server running on address http://localhost:30005')
});