import mongoose, { mongo } from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

const autor = mongoose.model('autores', authorSchema);

export { autor, authorSchema };
