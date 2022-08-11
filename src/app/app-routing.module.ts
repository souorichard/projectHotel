import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'promo', loadChildren: () => import('./pages/promo/promo.module').then(m => m.PromoModule) },

  { path: 'hotel', loadChildren: () => import('./pages/hotel/hotel.module').then(m => m.HotelModule) },

  { path: 'voo', loadChildren: () => import('./pages/voo/voo.module').then(m => m.VooModule) },

  { path: 'pacote', loadChildren: () => import('./pages/pacote/pacote.module').then(m => m.PacoteModule) },

  { path: 'oferta', loadChildren: () => import('./pages/oferta/oferta.module').then(m => m.OfertaModule) },

  { path: 'car', loadChildren: () => import('./pages/car/car.module').then(m => m.CarModule) },

  { path: 'seguro', loadChildren: () => import('./pages/seguro/seguro.module').then(m => m.SeguroModule) },



  { path: '', pathMatch: 'full', redirectTo: 'hotel' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
