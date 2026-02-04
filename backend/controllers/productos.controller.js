const { request } = require('express');
const db = require('../db/database');

//Get All
exports.getAll = (req, res) => {
    const sql = 'SELECT * FROM productos';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ productos: rows });
    });
};

// GET BY ID
exports.getById = (req, res) => {
  db.get(
    'SELECT * FROM productos WHERE id = ?',
    [req.params.id],
    (err, row) => {
      if (err) return res.status(500).json(err);
      res.json(row);
    }
  );
};

// CREATE
exports.create = (req, res) => {
  const { nombre, precio, categoria_id } = req.body;

  db.run(
    'INSERT INTO productos (nombre, precio, categoria_id) VALUES (?, ?, ?)',
    [nombre, precio, categoria_id],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
};

// UPDATE
exports.update = (req, res) => {
  const { nombre, precio, categoria_id } = req.body;

  db.run(
    `UPDATE productos
     SET nombre = ?, precio = ?, categoria_id = ?
     WHERE id = ?`,
    [nombre, precio, categoria_id, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ updated: true });
    }
  );
};

// DELETE
exports.remove = (req, res) => {
  db.run(
    'DELETE FROM productos WHERE id = ?',
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ deleted: true });
    }
  );
};



