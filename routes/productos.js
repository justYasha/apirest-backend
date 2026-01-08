const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de productos');
});

router.get('/:id', (req, res) => {
    res.send(`Detalle del producto con ID: ${req.params.id}`);
});

module.exports = router;