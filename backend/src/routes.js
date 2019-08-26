const express = require('express');
const routes = new express.Router();
const uploadConfig = require('./config/Uploads');
const multer = require('multer');

const postcontroller = require('./controllers/postController');

routes.post('/dev', (req, res) => {
  res.send(`Olá  ${req.body.nome} `);
})

routes.get('/json', (req, res) => {
  return res.json({
    nome: "Rodrigo",
    php: "bom"
  });
})

//rotas post
const uploads = multer(uploadConfig);

routes.get('/posts', postcontroller.index);
routes.post('/posts', uploads.single('imagem'), postcontroller.store);
routes.put('/posts', postcontroller.update);
routes.delete('/posts', postcontroller.delete);


module.exports = routes;