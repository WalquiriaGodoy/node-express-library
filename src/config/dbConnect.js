import mongoose from 'mongoose';

async function conectaNaDataBase() {
  mongoose.connect(process.env.DB_CONECTION_STRING, { dbName: 'biblioteca' });

  return mongoose.connection;
}

export default conectaNaDataBase;
