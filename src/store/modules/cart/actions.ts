import {IProduto} from '../../../Interfaces/IProduto';

export const AdicionarAoCarrinho = (produto: IProduto) => {
  return {
    type: '@cart/add',
    produto,
  };
};

export const RemoverDoCarrinho = (produto: string) => {
  return {
    type: '@cart/remove',
    produto: produto,
  };
};

export const PegarCarrinhoLocalStorage = () => {
  return {
    type: '@cart/localstorage',
  };
};

export const LimparCarrinho = () => {
  return {
    type: '@cart/clean',
  };
};
