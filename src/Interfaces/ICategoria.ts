import { IPhoto } from "./IPhoto";

export interface ICategoria{
  _id: string
  nome: string,
  descricao: string
  foto_id: IPhoto
}