import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IInvestment } from '../../core/interfaces/investment.interface';

export abstract class BaseResourceService {
  public http: HttpClient;
  private url: string;

  constructor(public apiPath: string, public injector: Injector) {
    this.http = injector.get(HttpClient);
    this.url = `${environment.url}${apiPath}`;
  }

  getAll(): Observable<Array<IInvestment>> {
    return this.http.get(this.url).pipe(
      map((res) => this.dataToResourceModelData(res)),
      catchError((error) => this.handleError(error))
    );
  }
  dataToResourceModelData(response: any): Array<IInvestment> {
    return response.data.listaInvestimentos;
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    alert('Ocorreu um erro ao carregar os dados, tente mais tarde.');
    return throwError(() => new Error(error));
  }
}
