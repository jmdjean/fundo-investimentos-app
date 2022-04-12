import { Component, OnInit } from '@angular/core';

import { IInvestment } from '../../../core/interfaces/investment.interface';
import { InvestmentService } from '../../../shared/services/investment/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {

  public investments: Array<IInvestment> = [];

  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.getAllInvestments();
  }

  getAllInvestments(): void{
    this.investmentService.getAll()
      .subscribe(res => {
        this.investments = res;
    });
  }
}
