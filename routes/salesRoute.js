//Endpoint ventas
const express = require('express');
const router = express.Router();
const SalesService = require('./../services/salesService');
const service = new SalesService();

//Get's
router.get('/', (req, res) => {
  const sales =service.find();
  res.json(sales);
});

router.get('/:id', (req, res) => {
  const { id } = req.params; //de todos los parametros solo me importa el id
  const sale =service.findOne(id);
  res.json(sale);
});

//Post
router.post('/add', (req, res) => {
  const body = req.body;
  const newSale= service.create(body);
  res.status(201).json(newSale);
});

//Patch
router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const sale=service.update(id,body);
  res.json(sale);
});

//Put
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const sale=service.update(id,body);
  res.json(sale);
});

//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sale=service.delete(id);
  res.json(sale);
});

module.exports = router;
