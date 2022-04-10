//Endpoint ventas
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});


//GET ventas
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM ventas;';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultados');
    }
  });
});

//GET venta específica

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` SELECT * FROM ventas WHERE id=${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No hay resultados');
    }
  });
});





//Productos de una venta
router.get('/sales/:sId/products/:pId', (req, res) => {
  const { sId, pId } = req.params; //de todos los parametros solo me importa el id
  res.json({
    sId,
    pId,
  });
});





//Post

router.post('/add', (req, res) => {
  const sql ='INSERT INTO ventas SET ?';

  const obj={
    cliente: req.body.cliente
  }

  connection.query(sql, obj, error => {
    if (error) throw error;
    res.json({
      message: 'Venta creada',
      data:obj
    });
  });

});

//Patch
router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Actualizada la venta',
    data: body,
    id,
  });
});

//Put
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const {cliente} = req.body;
  const sql =`UPDATE ventas SET cliente='${cliente}' WHERE id='${id}';`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Venta actualizada',
      data: cliente,
      id,
    });
  });
});


//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` DELETE FROM ventas WHERE id=${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Venta eliminada',
      id,
    });
  });

});

module.exports=router;
