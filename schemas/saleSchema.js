const Joi = require('joi');

//Cambiar a string cuando vaya a la bd
const id = Joi.string().uuid();
const date = Joi.date().default(Date.now);
const total = Joi.number().positive().precision(2).min(1);

const createSaleSchema = Joi.object({
  date: date.required(),
  total: total.required(),

});

const updateSaleSchema = Joi.object({
  date: date,
  total: total,

});

const getSaleSchema = Joi.object({
  id: id.required(),
});

module.exports = {createSaleSchema, updateSaleSchema, getSaleSchema}
