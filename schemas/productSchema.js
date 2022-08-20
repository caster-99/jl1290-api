const Joi = require('joi');

//Cambiar a string cuando vaya a la bd
const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(5).max(50);
const price = Joi.number().positive().precision(2).min(1);
const stock = Joi.number().integer().min(0);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  stock: stock.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  stock: stock,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
