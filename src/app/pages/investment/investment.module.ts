import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { InvestmentRoutingModule } from './investment-routing.module';


@NgModule({
  declarations: [
    InvestmentListComponent
  ],
  imports: [
    SharedModule,
    InvestmentRoutingModule
  ]
})
export class InvestmentModule { }
