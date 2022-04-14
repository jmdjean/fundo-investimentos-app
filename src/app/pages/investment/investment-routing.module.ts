import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';

const routes: Routes = [
  { path: '', component: InvestmentListComponent},
  { path: ':nome', component: InvestmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentRoutingModule {}
