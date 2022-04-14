//Endpoint telefonos
const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});


//GET telefonos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM telefonos;';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultados');
    }
  });
});

//GET telefono específico

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` SELECT * FROM telefonos WHERE cliente=${id}`;

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
  const sql ='INSERT INTO telefonos SET ?';

  const obj={
    cliente: req.body.cliente,
    telefono:req.body.telefono
  }

  connection.query(sql, obj, error => {
    if (error) throw error;
    res.json({
      message: 'Teléfono creado',
      data:obj
    });
  });


});

//Put
router.put('/update/:id/:phone', (req, res) => {
  const { id, phone } = req.params;
  const {telefono} = req.body;
  const sql =`UPDATE telefonos SET telefono='${telefono}' WHERE cliente='${id}' AND telefono='${phone}';`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Teléfono actualizado',
      data: telefono,
      id,
    });
  });
});


//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` DELETE FROM telefonos WHERE cliente=${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Teléfono eliminado',
      id,
    });
  });

});

module.exports = router;
