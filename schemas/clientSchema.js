const Joi = require('joi');

//Cambiar a string cuando vaya a la bd
const id = Joi.string().min(1).max(15);
const name = Joi.string().min(3).max(50);
const address = Joi.string().min(3).max(50);

const createClientSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  address: address.required(),

});

const updateClientSchema = Joi.object({
  name: name,
  address:address
});

const getClientSchema = Joi.object({
  id: id.required(),
});

module.exports = {createClientSchema, updateClientSchema, getClientSchema}
