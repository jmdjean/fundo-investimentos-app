import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { IndicadorCarenciaEnum } from '../../../core/enums/indicador-carencia.enum';
import { IInvestment } from '../../../core/interfaces/investment.interface';
import { InvestmentService } from '../../../shared/services/investment/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
})
export class InvestmentListComponent implements OnInit {
  public displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  public investments: Array<IInvestment> = [];
  public loadingInvestments = false;

  constructor(
    private investmentService: InvestmentService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllInvestments();
  }

  getAllInvestments(): void {
    this.loadingInvestments = true;
    this.investmentService.getAll().subscribe(
      (res) => {
        this.investments = res;
        this.loadingInvestments = false;
      },
      (error) => {
        this.loadingInvestments = false;
      }
    );
  }

  goToPageOfDetailsInvestment(investment: IInvestment): void {
    if (investment.indicadorCarencia === IndicadorCarenciaEnum.N) {
      this.router.navigate(['investments', investment.nome]);
    } else {
      this.openSnackBar('Investimento não pode ser editado');
    }
  }

  private openSnackBar(message: string) {
    this.snackBar.openFromComponent(InvestmentListComponent, {
      duration: 10000,
    });

    this.snackBar.open(message, 'fechar');
  }
}
