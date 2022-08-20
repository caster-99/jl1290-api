const express = require('express');
const router = express.Router();

const ClientsService = require('./../services/clientService');
const service = new ClientsService();

const validatorHandler = require('../middlewares/validatorHandler');
const {
  createClientSchema,
  updateClientSchema,
  getClientSchema,
} = require('../schemas/clientSchema');

//Get's
router.get('/', async (req, res) => {
  const clients = await service.find();
  res.json(clients);
});

router.get(
  '/:id',
  validatorHandler(getClientSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params; //de todos los parametros solo me importa el id
      const client = await service.findOne(id);
      res.json(client);
    } catch (error) {
      next(error);
    }
  }
);

//GET cliente específico

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` SELECT * FROM clientes WHERE cedula=${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No hay resultados');
    }
  });
});



//Post
router.post(
  '/add',
  validatorHandler(createClientSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newClient = await service.create(body);
    res.status(201).json(newClient);
  }
);

//Patch
router.patch(
  '/update/:id',
  validatorHandler(getClientSchema, 'params'),
  validatorHandler(updateClientSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const client = await service.update(id, body);
      res.json(client);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
);

// // Put
// router.put('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const client= await service.update(id,body);
//   res.json(client);
// });

//Delete
router.delete(
  '/delete/:id',
  validatorHandler(getClientSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const client = await service.delete(id);
      res.json(client);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;
