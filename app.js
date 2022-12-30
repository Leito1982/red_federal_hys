const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

let PORT= process.env.PORT || 3000;

app.use( express.static ("./public")); 
app.use ("/", mainRoutes);

app.set("view engine", "ejs");

app.listen(PORT, function (req,res) {
    console.log ("el servidor esta funcionendo en: " + PORT);
});