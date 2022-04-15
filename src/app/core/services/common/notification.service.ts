import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { InvestmentListComponent } from '../../../pages/investment/investment-list/investment-list.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}


  public openSnackBar(message: string) {
    this.snackBar.openFromComponent(InvestmentListComponent, {
      duration: 10000,
    });

    this.snackBar.open(message, 'fechar');
  }
}
