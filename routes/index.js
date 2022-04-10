const express=require('express');

const productsRouter =require('./productsRoute')
const salesRouter =require('./salesRoute')
const clientsRouter =require('./clientsRoute');
const brandsRouter =require('./brandsRoute');
 const phonesRouter =require('./phonesRoute');
// const purchaseRouter =require('./purchaseRoute');
// const locationRouter =require('./locationsRoute');

function routerApi(app){
  const router=express.Router();
  app.use('/api/v1',router)
  // router.use('/sales/purchase', purchaseRouter);
  // router.use('/products/location', locationRouter);
  router.use('/products',productsRouter);
  router.use('/clients/phones', phonesRouter);
  router.use('/clients',clientsRouter);
  router.use('/sales', salesRouter);
  router.use('/brands', brandsRouter);
}

module.exports=routerApi;
