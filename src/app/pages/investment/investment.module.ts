import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { DialogInfoModule } from '../../core/components/dialog-info/dialog-info.module';
import { TwoDigitDecimaNumberDirective } from '../../core/pipe/decimal-currency.directive';
import { SharedModule } from '../../shared/shared.module';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { InvestmentRoutingModule } from './investment-routing.module';

@NgModule({
  declarations: [
    InvestmentListComponent,
    InvestmentDetailsComponent,
    TwoDigitDecimaNumberDirective,
  ],
  imports: [
    SharedModule,
    InvestmentRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    DialogInfoModule,
    MatExpansionModule,
    MatChipsModule
  ]
})
export class InvestmentModule {}
