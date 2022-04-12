import { IShare } from './share.interface';

export interface IInvestment {
  nome: string;
  objetivo: string;
  saldoTotal: number,
  indicadorCarencia: string,
  acoes: IShare[]
}
