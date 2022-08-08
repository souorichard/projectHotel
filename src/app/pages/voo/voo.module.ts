import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VooRoutingModule } from './voo-routing.module';
import { VoosComponent } from './voos/voos.component';


@NgModule({
  declarations: [
    VoosComponent
  ],
  imports: [
    CommonModule,
    VooRoutingModule
  ]
})
export class VooModule { }
