const express = require('express');
const router = express.Router();


const ClientsService=require('./../services/clientService')
const service =new ClientsService();

//Get's
router.get('/', async (req, res) => {
  const clients = await service.find();
  res.json(clients);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params; //de todos los parametros solo me importa el id
    const client = await service.findOne(id);
    res.json(client);
  } catch (error) {
    next(error);
  }

});

//Post
router.post('/add', async (req, res) => {
  const body = req.body;
  const newClient= await service.create(body);
  res.status(201).json(newClient);
});

//Patch
router.patch('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const client= await service.update(id,body);
    res.json(client);
  } catch (error) {
    res.status(404).json({
      message:error.message
    });
  }

});

// // Put
// router.put('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const client= await service.update(id,body);
//   res.json(client);
// });

//Delete
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
  const client= await service.delete(id);
  res.json(client);
  } catch (error) {
    res.status(404).json({
      message:error.message
    });
  }

});

module.exports = router;
