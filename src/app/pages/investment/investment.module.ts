import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InvestmentListComponent } from './investment-list/investment-list.component';
import { InvestmentRoutingModule } from './investment-routing.module';


@NgModule({
  declarations: [
    InvestmentListComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule
  ]
})
export class InvestmentModule { }
