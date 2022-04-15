import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogInfoComponent } from './dialog-info.component';

@NgModule({
  declarations: [
    DialogInfoComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogInfoComponent
  ]
})
export class DialogInfoModule {}
