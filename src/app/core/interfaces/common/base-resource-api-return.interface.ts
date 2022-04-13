import { IInvestment } from '../Investment.interface';

export interface IBaseResourceApiReturn {
  status: string;
  data: Array<IInvestment>;
}
