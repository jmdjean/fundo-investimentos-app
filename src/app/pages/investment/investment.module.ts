import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared/shared.module';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';

@NgModule({
  declarations: [
    InvestmentListComponent,
    InvestmentDetailsComponent
  ],
  imports: [
    SharedModule,
    InvestmentRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class InvestmentModule { }
