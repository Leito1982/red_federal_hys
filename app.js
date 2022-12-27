const express = require("express");
const app = express();
const path = require("path");
//const routes = require("./routes/mainRoutes");

let PORT= 3000;

app.use( express.static ("./public"));

app.listen(PORT, function (req,res) {
    console.log ("el servidor esta funcionendo en: " + PORT);
});

//app.get("/", routes);

app.get ("/", (req,res) => {  res.sendFile ( path.join (__dirname, "./views/index.html")) });