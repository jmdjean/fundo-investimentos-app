import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared/shared.module';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { InvestmentRoutingModule } from './investment-routing.module';

@NgModule({
  declarations: [InvestmentListComponent, InvestmentDetailsComponent],
  imports: [
    SharedModule,
    InvestmentRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CdkTableModule,
    MatSnackBarModule
  ]
})
export class InvestmentModule {}
