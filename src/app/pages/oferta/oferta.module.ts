import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaRoutingModule } from './oferta-routing.module';
import { OfertasComponent } from './ofertas/ofertas.component';


@NgModule({
  declarations: [
    OfertasComponent
  ],
  imports: [
    CommonModule,
    OfertaRoutingModule
  ]
})
export class OfertaModule { }
