const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, 'public')));

const routes = require("./router/router");

app.use("/v1", routes);
app.get("/", (req, res)=>{
    res.send("<h1>Welcome to politico system</h1>");
});
module.exports=app;