let fs = require("fs");
let express = require("express");
let router = express.Router();

 router.get("/", (req, res, next)=>{
    let readsongdirt = fs.readdirSync("../audio")
    let songarray = []
    readsongdirt.forEach(data => songarray.push([data.replace(".mp3", "")]))
    let writefile = fs.writeFileSync(__dirname+"/test.json",JSON.stringify(songarray))
    let readdata = fs.readFileSync(__dirname+"/test.json","utf8")
    let parseddata = JSON.parse(readdata)   
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify(parseddata))

 })

router.post("/", (req, res)=>{

function Playlist (playlistname,cover,Name,year){
this.playlistname = playlistname,
this.cover = cover,
this.Name = Name,
this.year = year  
}

let NewPlaylist = new Playlist(...Object.values(req.body))

let songsarray = NewPlaylist.Name
let yeararray = NewPlaylist.year.split(",")

let playlistobject = {}

playlistobject[NewPlaylist.playlistname] = [{PlaylistName:NewPlaylist.playlistname,
cover:NewPlaylist.cover,
Songs:[]
}]

songsarray.forEach((val,i)=>{
   return playlistobject[NewPlaylist.playlistname][0].Songs.push({"Name":val,Year:yeararray[i]})
   })


let readfile = JSON.parse(fs.readFileSync("../Components/data.json", "utf8"))
readfile.push(playlistobject)
let writefile = fs.writeFileSync("../Components/data.json", JSON.stringify(readfile))

   res.end(JSON.stringify(playlistobject))
})



module.exports = router