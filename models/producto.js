const db = require('../db/database');

class Producto {
    static getAll(callback){
        db.all("SELECT * FROM productos",callback);
    } 
    static getById(id, callback){
        db.get("SELECT * FROM productos WHERE id = ?", [id], callback);
    }
    static create(nuevoProducto, callback){
        const { nombre, descripcion } = nuevoProducto;
        db.run("INSERT INTO productos (nombre, descripcion) VALUES (?, ?)", [nombre, descripcion], function(err) {
            if (err) {
                return callback(err);
            }
            nuevoProducto.id = this.lastID;
            callback(null, nuevoProducto);
        });
    }
    static deleteById(id, callback){
        db.run("DELETE FROM productos WHERE id = ?", [id], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, { deletedID: id });
        });
    }
    static updateById(id, productoActualizado, callback){
        const { nombre, descripcion } = productoActualizado;
        db.run("UPDATE productos SET nombre = ?, descripcion = ? WHERE id = ?", [nombre, descripcion, id], function(err) {
            if (err) {
                return callback(err);
            }
            if (this.changes === 0) {
                return callback(new Error('Producto no encontrado'));
            }
            callback(null, { message: 'Producto actualizado' });
        });
    }
}

module.exports = Producto;