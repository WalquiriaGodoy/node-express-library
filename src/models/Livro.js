import mongoose from 'mongoose';
import { authorSchema } from './Autor.js';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, 'O título é obrigatório'] },
    editora: { type: String, required: [true, 'A editora é obrigatória'] },
    preco: { type: Number },
    paginas: { type: Number },
    autor: authorSchema,
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
