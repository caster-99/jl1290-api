//Endpoint ventas
const express = require('express');
const router=express.Router();

//get's
router.get('/', (req, res) => {
  res.send('Muestra todas las ventas');
});

//Productos de una venta
router.get('/sales/:sId/products/:pId', (req, res) => {
  const { sId, pId } = req.params; //de todos los parametros solo me importa el id
  res.json({
    sId,
    pId,
  });
});

router.get('/sell', (req, res) => {
  res.send('Realizar venta');
});

//Post

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message:"Creación de venta",
    data:body
  });
});

//Patch
router.patch('/:id', (req, res) => {
  const {id}=req.params;
  const body = req.body;
  res.json({
    message:"Actualizado la venta",
    data:body,
    id
  });
});

//Put
router.put('/:id', (req, res) => {
  const {id}=req.params;
  const body = req.body;
  res.json({
    message:"Actualizado la venta",
    data:body,
    id
  });
});
//Delete
router.delete('/:id', (req, res) => {
  const {id}=req.params;
  res.json({
    message:"Eliminada la venta",
    id
  });
});

module.exports=router;
