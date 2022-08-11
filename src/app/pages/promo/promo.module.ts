import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { PromosComponent } from './promos/promos.component';


@NgModule({
  declarations: [
    PromosComponent
  ],
  imports: [
    CommonModule,
    PromoRoutingModule
  ]
})
export class PromoModule { }
