import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IInvestment } from '../../../core/interfaces/investment.interface';
import { InvestmentService } from '../../../shared/services/investment/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {
  public displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  public investments: Array<IInvestment> = [];
  public loadingInvestments = false;

  constructor(
    private investmentService: InvestmentService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getAllInvestments();
  }

  getAllInvestments(): void{
    this.loadingInvestments = true;
    this.investmentService.getAll()
      .subscribe(res => {
        this.investments = res;
        this.loadingInvestments = false;
    });
  }

  goToPageOfDetailsInvestment(investmentName: string): void{
    this.router.navigate(['', investmentName]);
  }
}
