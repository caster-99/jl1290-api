const express = require('express');
const router = express.Router();


const ClientsService=require('./../services/clientService')
const service =new ClientsService();

//Get's
router.get('/', (req, res) => {
  const clients =service.find();
  res.json(clients);
});

router.get('/:id', (req, res) => {
  const { id } = req.params; //de todos los parametros solo me importa el id
  const client =service.findOne(id);
  res.json(client);
});

//Post
router.post('/add', (req, res) => {
  const body = req.body;
  const newClient= service.create(body);
  res.status(201).json(newClient);
});

//Patch
router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const client=service.update(id,body);
  res.json(client);
});

//Put
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const client=service.update(id,body);
  res.json(client);
});

//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const client=service.delete(id);
  res.json(client);
});

module.exports = router;
