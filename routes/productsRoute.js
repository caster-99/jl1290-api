// Endpoint productos
const express = require('express');
const router = express.Router();

const ProductsService = require('./../services/productService');
const service = new ProductsService();

//Get's
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params; //de todos los parametros solo me importa el id
  const product = await service.findOne(id);
  res.json(product);
});

//Post
router.post('/add', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//Patch
router.patch('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

// // Put
// router.put('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const product = await service.update(id, body);
//   res.json(product);
// });

//Delete
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }

});

module.exports = router;
