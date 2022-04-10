//Endpoint marcas
const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});


//GET marcas
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM marcas;';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultados');
    }
  });
});

//GET marca específica

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` SELECT * FROM marcas WHERE id='${id}' OR nombre='${id}' `;

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
  const sql ='INSERT INTO marcas SET ?';

  const obj={
    nombre:req.body.nombre
  }

  connection.query(sql, obj, error => {
    if (error) throw error;
    res.json({
      message: 'Marca creada',
      data:obj
    });
  });


});

//Patch
router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Actualizado la marca',
    data: body,
    id,
  });
});

//Put
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const {nombre} = req.body;
  const sql =`UPDATE marcas SET nombre='${nombre}' WHERE id='${id}' OR nombre='${id}';`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Marca actualizada',
      data: nombre,
      id,
    });
  });
});


//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` DELETE FROM marcas WHERE id=${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Marca eliminada',
      id,
    });
  });

});

module.exports = router;
