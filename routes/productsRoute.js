const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const ProductsService = require('./../services/productService');
const service = new ProductsService();
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/productSchema');

//Get's
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params; //de todos los parametros solo me importa el id
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

//Post
router.post(
  '/add',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);


//Patch
router.put(
  '/update/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// // Put
// router.put('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const product = await service.update(id, body);
//   res.json(product);
// });

//Delete
router.delete(
  '/delete/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await service.delete(id);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
);

// //Delete
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   const product=service.update(id);
//   res.json(product);
// });

// module.exports = router;
