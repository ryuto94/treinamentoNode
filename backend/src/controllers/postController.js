const post = require('../models/post');

module.exports = {

  async index(req, res) {
    const posts = await post.find();
    console.log(posts)
    return res.json(posts);
  },

  async store(req, res) {
    const {
      autor,
      imagem,
      like,
      descricao
    } = req.body;
    const posts = await post.create({
      autor,
      imagem,
      like,
      descricao
    });
    return res.json(posts);
  },

  async update(req, res) {
    const {
      id,
      autor,
      imagem,
      like,
      descricao
    } = req.body;
    const posts = await post.findByIdAndUpdate(id, {
      $set: {
        autor,
        imagem,
        like,
        descricao
      }
    });
    return res.json(posts);
  },

  async delete(req, res) {
    const posts = await post.findOneAndDelete(req.body.id);
    return res.json({
      delete: true
    });
  }
}