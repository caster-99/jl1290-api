const express=require('express');

const productsRouter =require('./productsRoute')
const salesRouter =require('./salesRoute')
const clientsRouter =require('./clientsRoute');

function routerApi(app){
  const router=express.Router();
  app.use('/api/v1',router)
  router.use('/products',productsRouter);
  router.use('/clients',clientsRouter);
  router.use('/sales', salesRouter);
}

module.exports=routerApi;
