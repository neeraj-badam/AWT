fs = require("fs")


let msg = "";   
fs.readFile("greet.txt",function(error,data){
    if(error)
        msg = error.message
    else
    {
        msg = data.toString()
        var http = require("http")
        var server = http.createServer(
            function(req,res){
        res.writeHead(200,{contentType:"text/html"})
        res.write("<h1>Main Page</h1>")
        res.write(`${data.toString()}`)
        res.end()

    })

    server.listen(8000)
}
})

console.log("Node server started")