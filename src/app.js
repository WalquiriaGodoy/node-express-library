import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './midlewars/manipuladorDeErros.js';
import manipulador404 from './midlewars/manipulador404.js';

const conexao = await conectaNaDataBase();

conexao.on('error', (erro) => {
  console.error('erro de conexao', erro);
});

conexao.once('open', () => {
  console.log('conexão com o banco feita com sucesso!');
});

const app = express();
routes(app);

app.use(manipulador404);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;
