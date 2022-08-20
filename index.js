const express = require('express');
const routerApi =require('./routes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const  { logErrors, errorHandler,boomErrorHandler } = require('./middlewares/errorHandler')

app.use(express.json());

const whiteList = ['http://localhost:8080','https://inventariojl1290.com'];
const options={
  origin:(origin, callback)=>{
    if(whiteList.includes(origin)|| !origin){
      callback(null,true);
    }else{
      callback(new Error('No permitido'));
    }
  }
};
app.use(cors(options));


app.listen(port, () => {
  try {
    console.log('Port: ' + port);
    console.log("Conexión exitosa");
  } catch (error) {
    console.log(error.message);
  }

});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
