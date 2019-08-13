const {
  Schema,
  model
} = require('mongoose');

const PostSchema = new Schema({
  autor: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  },
  like: {
    type: Number,
    default: 0,
  },
  descricao: String
}, {
  timestamps: true
})

module.exports = model('post', PostSchema)