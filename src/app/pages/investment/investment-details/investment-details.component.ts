import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IInvestment } from '../../../core/interfaces/investment.interface';
import { InvestmentService } from '../../../shared/services/investment/investment.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss']
})
export class InvestmentDetailsComponent implements OnInit {
  public displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  public investment: IInvestment;
  public loadingInvestments = false;
  private selectedInvestmentIndex: number;

  constructor(
    private investmentService: InvestmentService,
    private router: Router,
    private activaterRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getInvestmentIndexSelected();
    this.getAllInvestments();
  }

  private getAllInvestments(): void{
    this.loadingInvestments = true;
    this.investmentService.getAll()
      .subscribe(res => {
        this.filterTheSelectedInvestment(res);
    });
  }

  private filterTheSelectedInvestment(investments: IInvestment[]): void {
    this.investment = investments.findIndex(this.selectedInvestmentIndex);
    this.loadingInvestments = false;
  }

  private getInvestmentIndexSelected(): void {
    this.selectedInvestmentIndex = this.activaterRoute.snapshot.params['selectedIndex'];
  }

}

