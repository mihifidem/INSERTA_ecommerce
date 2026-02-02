const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/ecommerce.db', (err) => {
    if (err){
        console.error('Error al abrir DB', err.message);
    } else {
        console.log('Conexión exitosa a la base de datos SQLite');      
    }
});

