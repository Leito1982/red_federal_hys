const path = require("path");


const mainController = {

    index: function (req, res) {
res.render('index.ejs');
        // res.sendFile(path.join(__dirname, "../views/index.html"))

    },

    obras: function (req, res) {
res.render('obras.ejs');
     //   res.sendFile(path.join(__dirname, "../views/obras.html"))

    },
    legislacion: function (req, res) {

        res.send("legislacion");
        // res.sendFile ( path.join (__dirname, "../views/legislacion.html"))

    },

    contacto: function (req, res) {

        res.send("pagina de contacto");
        // res.sendFile ( path.join (__dirname, "../views/index.html"))

    }


}

module.exports = mainController;