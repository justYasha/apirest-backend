const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
router.get('/', productosController.getAllProductos);

router.get('/:id', (req, res) => {
    res.send(`Detalle del producto con ID: ${req.params.id}`);
});

module.exports = router;