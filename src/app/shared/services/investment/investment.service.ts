import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IInvestment } from '../../../core/interfaces/investment.interface';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private suffixUrl = 'ca4ec77d-b941-4477-8a7f-95d4daf7a653';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<IInvestment>> {
    const url = environment.url;

    return this.http.get(url + this.suffixUrl).pipe(
      map((res: any) => this.dataToResourceModelData(res)),
      catchError((error: any) => this.handleError(error))
    );
  }

  dataToResourceModelData(res: any): Array<IInvestment> {
    return res.response.data.listaInvestimentos;
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    alert('Ocorreu um erro ao carregar os dados, tente mais tarde.');
    return throwError(() => new Error(error));
  }
}
