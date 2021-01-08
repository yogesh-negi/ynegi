let fs = require("fs");
let express = require("express");
let router = express.Router();


router.post("/", (req, res)=>{ 
let readfile = JSON.parse(fs.readFileSync("../Components/data.json", "utf8"))
readfile.forEach(data => Object.keys(data) == req.body.data ? delete data[req.body.data]: false)
let updatedarray = readfile.filter(data => Object.keys(data).length !== 0)
fs.writeFileSync("../Components/data.json", JSON.stringify(updatedarray))
})



module.exports = router