//Endpoint clientes
const express = require('express');
//const faker =require('faker');
const router=express.Router();

//Get's

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  //Si existe limit y ofset
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});

//Post

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message:"Creación de cliente",
    data:body
  });
});

//Patch
router.patch('/:id', (req, res) => {
  const {id}=req.params;
  const body = req.body;
  res.json({
    message:"Actualizado el cliente",
    data:body,
    id
  });
});

//Put
router.put('/:id', (req, res) => {
  const {id}=req.params;
  const body = req.body;
  res.json({
    message:"Actualizado el cliente",
    data:body,
    id
  });
});
//Delete
router.delete('/:id', (req, res) => {
  const {id}=req.params;
  res.json({
    message:"Eliminado el cliente",
    id
  });
});

module.exports=router;
