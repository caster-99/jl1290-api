//Endpoint ubicaciones
const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});


//GET ubicaciones
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM ubicaciones;';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultados');
    }
  });
});

//GET ubicacion específico

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` SELECT * FROM ubicaciones WHERE producto=${id}`;

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
  const sql ='INSERT INTO ubicaciones SET ?';

  const obj={
    producto: req.body.producto,
    ubicacion:req.body.ubicacion
  }

  connection.query(sql, obj, error => {
    if (error) throw error;
    res.json({
      message: 'Ubicación creada',
      data:obj
    });
  });


});

//Put
router.put('/update/:id/:uId', (req, res) => {
  const { id, uId } = req.params;
  const {ubicacion} = req.body;
  const sql =`UPDATE ubicaciones SET ubicacion='${ubicacion}' WHERE producto='${id}' AND ubicacion='${uId}';`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Ubicación actualizada',
      ubicacion: ubicacion,
      id,
    });
  });
});


//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` DELETE FROM ubicaciones WHERE producto=${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Ubicación eliminada',
      id,
    });
  });

});

module.exports = router;
