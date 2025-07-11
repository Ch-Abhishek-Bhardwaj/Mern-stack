
const { error } = require('console');
const fs = require('fs')

const requestHandler = (req,res)=>{
    // console.log(req.url,req.method,req.headers);
    if (req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Abhishek</title></head>');
    res.write('<body> <h1> Enter your details:- </h1>');
    // res.write('<form>');
    res.write('<form action= "/submit-details" method ="POST">');
    res.write('<label for="Name">Enter your name </label>');
    res.write('<input type="text" id ="name" name ="name" placeholder="enter your name"><br>')
    res.write('<label for="male">Male</label>');
    res.write('<input type ="radio" id="male" name="gender" value ="male">');
    res.write('<label for="female">Female</label>');
    res.write('<input type ="radio" id="female" name="gender" value ="female"><br>')
    res.write('<input type ="submit" value ="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }else if(req.url.toLowerCase() ==='/submit-details' && req.method=="POST"){
    
    const body=[];    
    req.on('data',chunk=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{
        const ParsedBody =Buffer.concat(body).toString();
        console.log(ParsedBody);//
        const params= new URLSearchParams(ParsedBody);

        const bodyObject =Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFile('user.txt',JSON.stringify(bodyObject),error=>{
            console.log("Data is written succesfully");
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        });
    });



        
        
    }else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Abhishek</title></head>');
    res.write('<body> <h1> Please go to Home.</body>');
    res.write('</html>');
    return res.end();
    }

    // process.exit();
};

module.exports = requestHandler; // to export module