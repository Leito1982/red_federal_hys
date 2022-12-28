const express = require('express');
const path = require ("path");
const router = express.Router();

router.get ("/", function (req, res) {

    res.sendFile ( path.join (__dirname, "../views/index.html"))

});

router.get ("/contacto", function (req, res) {

    res.send ("pagina de contacto");
   // res.sendFile ( path.join (__dirname, "../views/index.html"))

});



module.exports = router;