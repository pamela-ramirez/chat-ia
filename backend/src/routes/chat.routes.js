//importamos Express
const express = require("express");

const router = express.Router(); // Creamos un enrutador de Express

// Ruta para manejar los mensajes del chat
router.post("/", (req, res) => {

    const { message } = req.body;

    console.log("Mensaje recibido:", message);

    res.json({
        success: true,
        message: "Mensaje recibido correctamente",
        userMessage: message
    });
});

module.exports = router;    