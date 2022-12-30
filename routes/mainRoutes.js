const express = require('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers');

// router.get('/', (req, res) => {
//     res.render('index.ejs');
// });

// router.get('/obras', (req, res) => {
//     res.render('obras.ejs');
// });

// router.get("/legislacion", (req, res) => {

//     res.send("legislacion");
// });

// router.get('/contacto', (req, res) => {
//     res.send("pagina de contacto");
// });




router.get ("/", mainControllers.index);

router.get ("/legislacion",mainControllers.legislacion);

router.get ("/obras",mainControllers.obras);

router.get ("/contacto",mainControllers.contacto);

module.exports = router;