const sumRequestHandler = (req,res)=>{
    console.log("In Sum request Handler",req.url);
    const body=[];
    req.on('data',  chunk=>{
        body.push(chunk);
    })
    req.on('end',() =>{
        const bodyStr=Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyobj = Object.fromEntries(params);
        const result = Number(bodyobj.first)+Number(bodyobj.second);
        console.log(result);
            
    });

}
exports.sumRequestHandler = sumRequestHandler;