import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatSliderModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSliderModule
  ]
})
export class SharedModule { }
