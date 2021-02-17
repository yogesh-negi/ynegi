let app = require("express");
let Router = app.Router();
let fs = require("fs");

Router.get("/", (req, res)=>{
    let data = fs.readdirSync("./public/uploads/", "utf8")
    res.send(JSON.stringify(data))
})

module.exports = Router;