var express = require('express');
let assert = require("assert")
var fs = require("fs")
var path = require('path');
var GridFsStorage = require('multer-gridfs-storage');
var app = express();
var multer = require("multer");
var cors = require('cors');
app.use(cors());
var port  = 80;
var bodyparser = require("body-parser");
var urlencoder = bodyparser.urlencoded({extended:true});
var mm = require("music-metadata")


app.use(bodyparser.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public/uploads')));
var mongoose = require("mongoose")
var mongodb = require("mongodb");
var MongoClient = require("mongodb");

var url = "mongodb+srv://yogesh-negi:Yogeshnegi@123@cluster0.etu5e.mongodb.net/songs?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(()=>{
        console.log("database connected....")
}).catch(err => {
        console.log(err.message);
})

var songSchema = new mongoose.Schema({
        playlistname:String,
        cover:String,
        Name:String,
        Year:Number,
        duration:String
})

var songModel = mongoose.model("songschema", songSchema);

var storage = multer.diskStorage({
        destination:"./public/uploads",
        filename:function(req, file, cb){
            cb(null, file.originalname);
        }
})

var upload = multer({
        storage:storage,
}).single("file");




app.get("/Home",(req, res)=>{
        songModel.find({ }).then(data => res.send(data));
});


app.get("/test",(req, res)=>{
        let array = []
        fs.readdirSync("./public/uploads").forEach(filename=>{
        mm.parseFile("./public/uploads/"+filename).then(data=> array.push({"size":data.format.duration, "Name":filename})).then(()=>console.log(array))
    });
});


app.post("/upload", urlencoder, (req, res)=>{

        upload(req, res, (err)=>{
                if(err){
                        console.log(err.message);
                } else {
                        mongodb.MongoClient.connect(url, (err, client)=>{
                        assert.ifError(err);
                        const db = client.db("sadsongs");
                        var bucket = new mongodb.GridFSBucket(db);
                        fs.createReadStream("./public/uploads/"+req.file.filename).
                        pipe(bucket.openUploadStream(req.file.filename)).
                        on("error", (error)=>{
                                assert.ifError(error);
                        })
                        .on("finish", ()=>{
                            console.log("done !!");
                        })

                        })

                        let newmodel = new songModel(JSON.parse(req.body.body));
                        mm.parseFile("./public/uploads/"+req.file.filename).then(file => {

        let duration = file.format.duration/60
let time = new Date();
time.setMinutes(Number(duration.toFixed(2).split(".")[0]))
time.setSeconds(Number(duration.toFixed(2).split(".")[1]))
        newmodel.Name = req.file.filename.toString();
        newmodel.duration = time.getSeconds()<10?`0${time.getMinutes()}:0${time.getSeconds()}`:`0${time.getMinutes()}:${time.getSeconds()}`;
        }).then(()=>{
         newmodel.save(error => {
                                if(error){
                                 console.log('something went wrong');

                                } else {
                                    console.log('data saved successfully........');

                           }

                   })

   })

                   res.send("http://ec2-65-2-4-151.ap-south-1.compute.amazonaws.com:8080"+req.file.filename)
           }
   })


}
)
app.get("/Openplaylist", (req, res)=>{

    let data = fs.readdirSync("./public/uploads/", "utf8")
    res.send(JSON.stringify(data));
})




app.listen(port, ()=>{
console.log('app listening on port ', port);
})





