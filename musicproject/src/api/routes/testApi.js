let fs = require("fs");
let assert = require("assert")
var path = require('path');
let express = require("express");
let router = express.Router();
var crypto = require('crypto');
var multer = require('multer');
var mongoose = require("mongoose");
var mongodb = require("mongodb");
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var MethodOverride = require('method-override');
const { Console } = require("console");
const { stringify } = require("querystring");

const uri = "mongodb+srv://yogesh-negi:Yogeshnegi@123@cluster0.etu5e.mongodb.net/songs?retryWrites=true&w=majority";

mongoose
     .connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected'))
     .catch(err => console.log( err ));






let songSchema = new mongoose.Schema({
  playlistname:String,
  cover:String,
  Name:Array,
  year:Number
})

let songmodel = mongoose.model("songschema", songSchema)

var storage = multer.diskStorage({
   destination:"./public/uploads",
   filename:function(req, file, cb){
     cb(null, file.originalname)
   }
 })
 
 let upload = multer({
   storage:storage,
 }).single("file")
 
 
   router.post("/" , (req, res)=>{

    upload(req, res, (err)=>{
       if(err){
         console.log(err);
       } else {
        
        mongodb.MongoClient.connect(uri, (err, client)=>{
          assert.ifError(err);
          const db = client.db("sadsongs")
          var bucket = new mongodb.GridFSBucket(db);
          
          fs.createReadStream("./public/uploads/"+req.file.filename).
          pipe(bucket.openUploadStream(req.file.filename)).
          on("error", (error)=>{
          assert.ifError(error);
          }).
          on("finish", ()=>{
             console.log("done !!");
          })
          // .bucket.openDownloadStreamByName(songname).
          // pipe(fs.createWriteStream('./playedsongs/'+songname)).
          // on('error', (error) => {
          //    assert.ifError(error);
          // }).
          // on("finish", () => {
          //    console.log('downloaded !');
          // })
          
          
          })
          let newmodel = new songmodel(JSON.parse(req.body.body))
          newmodel.Name = req.file.filename
          newmodel.save(error => {
            if(error){
              console.log('something went wrong')
            } else {
              console.log('data has been saved')
            }
          })
         res.send(`http://localhost:4000/${req.file.filename}`)
       }
   })
   })

   router.get("/", (req, res)=>{
  //   let readdir = fs.readdirSync("./public/uploads")
  //  res.send(readdir)
  songmodel.find({ }).then(data => res.send(data))
   })




// let Schema = mongoose.Schema
// let blogpostschma = new Schema({
//  name:String,
// email:String,
// text:String,
// date:Object,
// })

//  let blogpost = mongoose.model("comments", blogpostschma)
// let data = {
//    title:"hey this is my first script"
// }

// const newblogpost = new blogpost(data)


// newblogpost.save(error => {
//    if(error){
//       console.log("something went wrong")
//    } else {
//       console.log("data has been saved")
//    }
// })

//  router.get("/", (req, res, next)=>{
//    //  let readsongdirt = fs.readdirSync("../audio")
//    //  let songarray = []
//    //  readsongdirt.forEach(data => songarray.push([data.replace(".mp3", "")]))
//    //  let writefile = fs.writeFileSync(__dirname+"/test.json",JSON.stringify(songarray))
//    //  let readdata = fs.readFileSync(__dirname+"/test.json","utf8")
//    //  let parseddata = JSON.parse(readdata)   
//    //  res.writeHead(200,{"content-type":"application/json"})
//    //  res.end(JSON.stringify(parseddata))
//     blogpost.find({ }).then(data => res.end(data.toString()))
//  })

// router.post("/", (req, res)=>{


// function Playlist (playlistname,cover,Name,year){
// this.playlistname = playlistname,
// this.cover = cover,
// this.Name = Name,
// this.year = year  
// }

// let NewPlaylist = new Playlist(...Object.values(req.body))

// let songsarray = NewPlaylist.Name
// let yeararray = NewPlaylist.year.split(",")

// let playlistobject = {}

// playlistobject[NewPlaylist.playlistname] = [{PlaylistName:NewPlaylist.playlistname,
// cover:NewPlaylist.cover,
// Songs:[]
// }]

// songsarray.forEach((val,i)=>{
//    return playlistobject[NewPlaylist.playlistname][0].Songs.push({"Name":val,Year:yeararray[i]})
//    })


// let readfile = JSON.parse(fs.readFileSync("../Components/data.json", "utf8"))
// readfile.push(playlistobject)
// let writefile = fs.writeFileSync("../Components/data.json", JSON.stringify(readfile))

//    res.end(JSON.stringify(playlistobject))
// })



module.exports = router