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
}

module.exports = Producto;