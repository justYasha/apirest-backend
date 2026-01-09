const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.getAllProductos);
router.get('/:id', productosController.getProductoById);

router.post('/', productosController.createProducto);

// Si el borrado es por URl
//router.delete('/:id', productosController.deleteProducto);
// Si el borrado es por body
router.delete('/', productosController.deleteProducto);
module.exports = router;