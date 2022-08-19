//Endpoint ventas
const express = require('express');
const router = express.Router();
const SalesService = require('./../services/salesService');
const service = new SalesService();

//Get's
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params; //de todos los parametros solo me importa el id
  const sale = service.findOne(id);
  res.json(sale);
});

//Productos de una venta
router.get('/sales/:sId/products/:pId', (req, res) => {
  const { sId, pId } = req.params; //de todos los parametros solo me importa el id
  res.json({
    sId,
    pId,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const newSale = service.create(body);
  res.status(201).json(newSale);
});

//Patch
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const sale = service.update(id, body);
  res.json(sale);
});

//Put
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const sale = service.update(id, body);
  res.json(sale);
});
//Delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sale = service.update(id);
  res.json(sale);
});

module.exports = router;
