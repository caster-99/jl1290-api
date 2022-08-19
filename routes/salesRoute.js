//Endpoint ventas
const express = require('express');
const router = express.Router();
const SalesService = require('./../services/salesService');
const service = new SalesService();

//Get's
router.get('/',async (req, res) => {
  const sales = await service.find();
  res.json(sales);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params; //de todos los parametros solo me importa el id
  const sale = await service.findOne(id);
  res.json(sale);
});

//Post
router.post('/add', async (req, res) => {
  const body = req.body;
  const newSale = await service.create(body);
  res.status(201).json(newSale);
});

//Patch
router.patch('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const sale = await service.update(id, body);
    res.json(sale);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

// //Put
// router.put('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const sale = await service.update(id, body);
//   res.json(sale);
// });

//Delete
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await service.delete(id);
    res.json(sale);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }

});

module.exports = router;
