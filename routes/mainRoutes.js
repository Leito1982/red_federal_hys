const express = require('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers');

router.get ("/", mainControllers.index);

router.get ("/legislacion",mainControllers.legislacion);

router.get ("/obras",mainControllers.obras);

router.get ("/contacto",mainControllers.contacto);

module.exports = router;