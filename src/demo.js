let fs = require("fs")
let http = require("http")
let songsname = fs.readdirSync("../..");


let server = http.createServer(function(req, res){
 res.writeHead(200, {"content-type":"text/html"})
 res.end("hello world")
})
server.listen(3000, "127.0.0.1")