import { IPhoto } from "./IPhoto";

export interface IProduto{
  _id: string,
  nome: string,
  descricao: string,
  preco: number
  subtotal: number
  quantidade: number
  foto_id: IPhoto
}