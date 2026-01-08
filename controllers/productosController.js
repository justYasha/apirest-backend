const Producto = require('../models/producto');

exports.getAllProductos = (req, res) => {
    Producto.getAll((err, productos) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(productos);
        }
    });
};