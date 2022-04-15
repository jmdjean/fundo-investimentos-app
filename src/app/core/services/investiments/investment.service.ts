import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IInvestment } from '../../interfaces/investment.interface';
import { IShare } from '../../interfaces/share.interface';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private suffixUrl = 'ca4ec77d-b941-4477-8a7f-95d4daf7a653';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Array<IInvestment>> {
    const url = environment.url;

    return this.http.get(url + this.suffixUrl).pipe(
      map((res: any) => this.dataToResourceModelData(res)),
      catchError((error: any) => this.handleError(error))
    );
  }

  public dataToResourceModelData(res: any): Array<IInvestment> {
    const investimentos = res.response.data
      .listaInvestimentos as Array<IInvestment>;

    return investimentos.map((investimento): IInvestment => {
      investimento.acoes = this.buildShareAttribute(
        investimento.acoes,
        investimento.saldoTotal
      );
      return investimento;
    });
  }

  public checkAmountValueToWithdraw(acao: IShare): boolean {
    if (acao.valorResgate === 0) {
      return false;
    }
    return acao.saldoAcumulado < acao.valorResgate;
  }

  public getAmountToWithdraw(investment: IInvestment): number {
    return investment.acoes
      .filter((acao) => acao.valorResgate)
      .reduce((sum, current) => sum + Number(current.valorResgate), 0);
  }

  public validateAllValuesToWithdraw(investment: IInvestment): boolean {
    return investment.acoes.filter((acao) => !acao.valorValido).length == 0;
  }

  private buildShareAttribute(acoes: IShare[], saldoTotal: number): IShare[] {
    return acoes.map((acao): any => {
      acao.saldoAcumulado = this.returnShareWithCalculatedValue(
        saldoTotal,
        acao.percentual
      );
      acao.valorValido = true;

      return acao;
    });
  }

  private returnShareWithCalculatedValue(
    saldoTotal: number,
    percentual: number
  ): number {
    return (saldoTotal * percentual) / 100;
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    alert('Ocorreu um erro ao carregar os dados, tente mais tarde.');
    return throwError(() => new Error(error));
  }
}
