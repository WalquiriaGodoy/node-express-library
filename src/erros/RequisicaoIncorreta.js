import ErroBase from './ErroBase.js';

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = 'Um ou mais dados fornecidos são inconsistentes') {
    super(mensagem, 400);
  }
}

export default RequisicaoIncorreta;
