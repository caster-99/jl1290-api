// Endpoint productos
const express = require('express');
const router = express.Router();
const mysql = require('mysql');



var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w',
  database: 'inventario-jl1290',
});

//GET productos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM productos;';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultados');
    }
  });
});

//GET producto específico

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` SELECT * FROM productos WHERE id='${id}' OR codigo='${id}';`;

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

router.post('/add', (req, res) => {
  const sql ='INSERT INTO productos SET ?';

  const obj={
    codigo: req.body.codigo,
    nombre:req.body.nombre,
    descripcion:req.body.descripcion,
    tipo:req.body.tipo,
    disponible:req.body.disponible,
    marca:req.body.marca,
    precio:req.body.precio,
  }

  connection.query(sql, obj,error => {
    if (error) throw error;
    res.json({
      message: 'Producto creado',
      data:obj
    });
  });
});


//Patch
router.patch('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Actualizado el producto',
    data: body,
    id,
  });
});

//Put
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  // const {nombre} = req.body;
  // const {codigo} = req.body;
  // const {descripcion} = req.body;
  // const {tipo} = req.body;
  // const {disponible} = req.body;
  // const {marca} = req.body;
  // const {precio} = req.body;

  const obj={
    codigo: req.body.codigo,
    nombre:req.body.nombre,
    descripcion:req.body.descripcion,
    tipo:req.body.tipo,
    disponible:req.body.disponible,
    marca:req.body.marca,
    precio:req.body.precio,
  }

  const sql =`UPDATE productos SET ? WHERE id='${id}' OR codigo='${id}';`;

  connection.query(sql, obj,error => {
    if (error) throw error;
    res.json({
      message: 'Producto actualizado',
      data: obj,
      id,
    });
  });
});


//Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = ` DELETE FROM productos WHERE id='${id}' OR codigo='${id}';`;

  connection.query(sql, error => {
    if (error) throw error;
    res.json({
      message: 'Producto eliminado',
      id,
    });
  });

});

// //@type   POST
// //route for post data
// app.post("/post", upload.single('image'), (req, res) => {
//   if (!req.file) {
//       console.log("No file upload");
//   } else {
//       console.log(req.file.filename)
//       var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
//       var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
//       db.query(insertData, [imgsrc], (err, result) => {
//           if (err) throw err
//           console.log("file uploaded")
//       })
//   }
// });

module.exports = router;

// const ProductsService=require('./../services/productService')
// const service =new ProductsService();

// //Get's
// router.get('/', (req, res) => {
//   const products =service.find();
//   res.json(products);
// });

// router.get('/filter', (req, res) => {
//   res.send('Filtro');
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params; //de todos los parametros solo me importa el id
//   const product =service.findOne(id);
//   res.json(product);
// });

// //Post
// router.post('/', (req, res) => {
//   const body = req.body;
//   const newProduct= service.create(body);
//   res.status(201).json(newProduct);
// });

// //Patch
// router.patch('/:id', (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const product=service.update(id,body);
//   res.json(product);
// });

// // //Put
// // router.put('/:id', (req, res) => {
// //   const { id } = req.params;
// //   const body = req.body;
// //   const product=service.update(id,body);
// //   res.json(product);
// // });

// //Delete
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   const product=service.update(id);
//   res.json(product);
// });

// module.exports = router;
