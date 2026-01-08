const sqlite3 = require('sqlite3').verbose();

// conecta (crea la DB si no existe)
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('DB creada / conectada');
  }
});

// crea la tabla
db.run(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Tabla productos creada');
  }
});

// cierra conexión
db.close();
