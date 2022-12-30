const express = require('express');
const router = express.Router();
const mainController = express("./controllers/mainControllers");

router.get ("/", mainController.index );

router.get ("/legislacion",mainController.legislacion);

router.get ("/Obras",mainController.obras);

router.get ("/contacto",mainController.contacto);



module.exports = router;