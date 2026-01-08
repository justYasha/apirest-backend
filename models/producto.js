const db = require('../db/database');

class Producto {
    static getAll(callback){
        db.all("SELECT * FROM productos",callback);
    } 
}

module.exports = Producto;