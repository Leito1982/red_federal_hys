const controlador = {

    index: (req, res) => {
        res.render('index');
    },

    obras: (req, res) => {
        res.render('obras.ejs');
        // res.sendFile(path.join(__dirname, "../views/obras.ejs"));

    },
    legislacion: (req, res) => {

        res.send("legislacion");
        // res.sendFile ( path.join (__dirname, "../views/legislacion.html"))
    },

    contacto: (req, res) => {

        res.send("pagina de contacto");
        // res.sendFile ( path.join (__dirname, "../views/index.html"))
    },

}
module.exports = controlador; 