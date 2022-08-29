import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IndicadorCarenciaEnum } from '../../../core/enums/indicador-carencia.enum';
import { IInvestment } from '../../../core/interfaces/investment.interface';
import { NotificationService } from '../../../core/services/common/notification.service';
import { InvestmentService } from '../../../core/services/investiments/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
})
export class InvestmentListComponent implements OnInit {
  public displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  public investments: Array<IInvestment> = [];
  public loadingInvestments = false;
  panelOpenState = false;

  constructor(
    private investmentService: InvestmentService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getAllInvestments();
  }

  addCondition(){
    this.condicoes.push({
      nome: `Condição ${(this.condicoes.length + 1).toString()}`,
      posicao: this.condicoes.length + 1
    })
  }

  getAllInvestments(): void {
    this.loadingInvestments = true;
    this.investmentService.getAll().subscribe(
      (res) => {
        this.investments = res;
        this.loadingInvestments = false;
      },
      () => {
        this.notificationService.openSnackBar('Não foi possivel listar os investimentos');
        this.loadingInvestments = false;
      }
    );
  }

  goToPageOfDetailsInvestment(investment: IInvestment): void {
    if (investment.indicadorCarencia === IndicadorCarenciaEnum.N) {
      this.router.navigate(['investments', investment.nome]);
    } else {
      this.notificationService.openSnackBar('Investimento não pode ser editado');
    }
  }
}
