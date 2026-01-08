const express = require('express');
const router = express.Router();
// Importa la base de datos si es necesario
const db = require('../db/database');
router.get('/', (req, res) => {
    //res.send('Lista de productos');
    db.all('SELECT * FROM productos', [], (err, rows) => {
        if (err) {
            res.status(500).send('Error al obtener productos');
            return;
        }
        console.log("Resultados de la consulta:");
        console.dir(rows, { depth: null });
        res.json(rows);
    });
});

router.get('/:id', (req, res) => {
    res.send(`Detalle del producto con ID: ${req.params.id}`);
});

module.exports = router;