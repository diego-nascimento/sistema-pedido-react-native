import produce from 'immer';
import { IProduto } from '../../../Interfaces/IProduto';

interface Iaction{
  type: string,
  produto?: any
}

export default function cart(state = [], action:Iaction) {
  switch (action.type) {
    case '@cart/add':
      return produce(state, (draft:Array<IProduto>) => {
        const productIndex: number = draft.findIndex(
          (produto:IProduto) => produto._id === action.produto._id,
        );
        if (productIndex >= 0) {
          draft[productIndex].quantidade += 1;
        } else {
          draft.push({
            ...action.produto,
            quantidade: 1,
          });
        }
      });
    case '@cart/remove':
      return produce(state, (draft:Array<IProduto>) => {
        const productIndex = draft.findIndex(
          (produto) => produto._id === action.produto,
        );
        if (productIndex >= 0) {
          if (draft[productIndex].quantidade === 1) {
            draft.splice(productIndex, 1);
          } else {
            draft[productIndex].quantidade -= 1;
          }
        }
      });

    case '@cart/clean':
      return [];

    default:
      return state;
  }
}
