import { IPhoto } from "./IPhoto";

export interface IEmpresa {
  _id: string;
  nome: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  telefone: string;
  foto: IPhoto;
}