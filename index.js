const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const productosRouter = require('./routes/productos');
const app = express();
const port=3000;
const db= new sqlite3.Database('./database.sqlite');

app.use('/api/productos', productosRouter);

app.get('/', (req, res) => {
    db.serialize(() => {
        db.all('SELECT * FROM productos', [], (err, rows) => {
         if (err) {
               res.status(500).send(err.message);
         } else {
                res.json(rows);
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});