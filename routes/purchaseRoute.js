//Endpoint compras
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// const sales = require('./salesRoute');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});

//Productos de una venta especifica
router.get('/:cId/:vId', (req, res) => {
  const { cId } = req.params;
  const { vId } = req.params;
  const sql=`SELECT * FROM viewcompras  WHERE cedula='${cId}' AND id='${vId}';`;
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
router.get('/:sId', (req, res) => {
  const { sId } = req.params; //de todos los parametros solo me importa el id
  const sql=`SELECT * FROM viewcompras  WHERE cedula='${sId}';`;
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
  const sql ='INSERT INTO compras SET ?';

  const obj={
    venta:req.body.venta,
    producto:req.body.producto,
    cantidad:req.body.cantidad
  }

  connection.query(sql, obj, error => {
    if (error) throw error;
    res.json({
      message: 'Compra creada',
      data:obj,
    });
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
router.put('/update/:vId/:pId', (req, res) => {
  const { vId, pId } = req.params;
  const {cantidad} = req.body;
  // const {producto} = req.body;
  const sql =`UPDATE compras SET cantidad='${cantidad}' WHERE venta='${vId}' AND venta='${pId}';`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Compra actualizada',
      data: cantidad,
      vId,
      pId,
    });
  });
});


//Delete
router.delete('/delete/:vId/:pId', (req, res) => {
  const { vId, pId} = req.params;
  const sql = ` DELETE FROM compras WHERE venta='${vId}' AND  producto='${pId}'`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Venta eliminada',
      vId,
      pId,
    });
  });

});


module.exports=router;
