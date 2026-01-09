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

exports.getProductoById = (req, res) => {
    const id = req.params.id;

    Producto.getById(id, (err, producto) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!producto) {
            res.status(404).json({ message: 'Producto no encontrado' });
        } else {
            res.json(producto);
        }
    });
};

exports.createProducto = (req, res) => {
    const nuevoProducto = req.body;
   
    Producto.create(nuevoProducto, (err, productoCreado) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(productoCreado);
        }
    });
};

exports.deleteProducto = (req, res) => {
    // Borrado para ID desde URL
    //const id = req.params.id;
    const id = req.body.id;
   // res.json({ message: `Producto con id ${id} eliminado (simulado)` });
    Producto.deleteById(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: `Producto con id ${id} eliminado`});
        }
    });
};
