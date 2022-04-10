const express = require('express');
const routerApi = require('./routes');
const mysql = require('mysql');
// const { tr } = require('faker/lib/locales');

const app = express();
const port =3050;

app.use(express.json());

// Conexión MySQL

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});

//Checking conexión
connection.connect((error) => {
  if (error) throw error;
  console.log('Conexión exitosa, servidor activo');
});

app.listen(port, () => {
  console.log('Servidor activo en puerto: ' + port);
});

routerApi(app);
