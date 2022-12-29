const express = require('express');
const path = require ("path");
const router = express.Router();

router.get ("/", function (req, res) {

    res.sendFile ( path.join (__dirname, "../views/index.html"))

});

router.get ("/legislacion", function (req, res) {

    res.send ("legislacion");
   // res.sendFile ( path.join (__dirname, "../views/index.html"))

});

router.get ("/Obras", function (req, res) {

res.sendFile ( path.join (__dirname, "../views/obras.html"))

});

router.get ("/contacto", function (req, res) {

    res.send ("pagina de contacto");
   // res.sendFile ( path.join (__dirname, "../views/index.html"))

});



module.exports = router;