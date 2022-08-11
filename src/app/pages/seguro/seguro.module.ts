import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguroRoutingModule } from './seguro-routing.module';
import { SegurosComponent } from './seguros/seguros.component';


@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    CommonModule,
    SeguroRoutingModule
  ]
})
export class SeguroModule { }
