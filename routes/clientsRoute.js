//Endpoint clientes
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//Get's
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM clientes;';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultados');
    }
  });
});

//GET cliente específico

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` SELECT * FROM clientes WHERE cedula=${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No hay resultados');
    }
  });
});



//Post

router.post('/add', (req, res) => {
  const sql ='INSERT INTO clientes SET ?';

  const obj={
    cedula: req.body.cedula,
    nombre:req.body.nombre
  }

  connection.query(sql, obj, error => {
    if (error) throw error;
    res.send('Cliente creado');
  });


});

//Patch
router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Actualizado el cliente',
    data: body,
    id,
  });
});

//Put
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const {nombre} = req.body;
  const sql =`UPDATE clientes SET nombre='${nombre}' WHERE cedula='${id}';`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Cliente actualizado',
      data: nombre,
      id,
    });
  });
});


//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` DELETE FROM clientes WHERE cedula=${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Cliente eliminado',
      id,
    });
  });

});

module.exports = router;
