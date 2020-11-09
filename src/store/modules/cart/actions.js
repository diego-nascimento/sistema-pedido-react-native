export function AdicionarAoCarrinho(produto) {
  return {
    type: '@cart/add',
    produto,
  };
}

export function RemoverDoCarrinho(produto) {
  return {
    type: '@cart/remove',
    produto: produto,
  };
}

export function PegarCarrinhoLocalStorage() {
  return {
    type: '@cart/localstorage',
  };
}

export function LimparCarrinho() {
  return {
    type: '@cart/clean',
  };
}
