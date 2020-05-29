const http= require('http');
const port=7777;
const fs= require('fs');
function requesthandler(req,res){
    console.log(req.url);
    res.writeHead(200,{"content-type": "text/html"});
    fs.readFile("./index.html",function(err,data){
        if(err){
            console.log(err);
            return res.end("<h1>ERROR</h1>");
        }
        return res.end(data);
        
    });
    //res.end("<h1>GOTCHA!!!!</h1>");
}
var server=http.createServer(requesthandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on ",port);
});