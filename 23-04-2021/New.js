const display = require("./DateAndTime");
const obj = display()
console.log("displaying ")
console.log(obj.output)
console.log(obj.time)


var http = require("http")
var server = http.createServer(function(req,res){
    if(req.url == "/"){
    res.writeHead(200,{contentType:"text/html"})
    res.write("<h1>Main Page</h1>")
    if(obj.time.startsWith('0'))
        time = obj.time
    obj.time = 12+time.substring(1)
    res.write(`${obj.time} ${obj.output}`)
    res.end()
    }
    
})

server.listen(8000)
console.log("Node server started")