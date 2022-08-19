// Endpoint productos
const express = require('express');
const router = express.Router();


const ProductsService=require('./../services/productService')
const service =new ProductsService();

//Get's
router.get('/', (req, res) => {
  const products =service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params; //de todos los parametros solo me importa el id
  const product =service.findOne(id);
  res.json(product);
});

//Post
router.post('/add', (req, res) => {
  const body = req.body;
  const newProduct= service.create(body);
  res.status(201).json(newProduct);
});

//Patch
router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product=service.update(id,body);
  res.json(product);
});

//Put
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product=service.update(id,body);
  res.json(product);
});

//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const product=service.delete(id);
  res.json(product);
});

module.exports = router;
