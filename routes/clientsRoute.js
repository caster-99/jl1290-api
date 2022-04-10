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
 connection.query(sql, (error, results)=>{
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultados');
    }
 } )
});

//Post

router.post('/add', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Creación de cliente',
    data: body,
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
  const body = req.body;
  res.json({
    message: 'Actualizado el cliente',
    data: body,
    id,
  });
});
//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Eliminado el cliente',
    id,
  });
});

module.exports = router;
