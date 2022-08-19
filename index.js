const express = require('express');
const routerApi =require('./routes');
const app = express();
const port = 3000;

const  { logErrors, errorHandler,boomErrorHandler } = require('./middlewares/errorHandler')

app.use(express.json());

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
