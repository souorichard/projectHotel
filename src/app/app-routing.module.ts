import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'hotel', loadChildren: () => import('./pages/hotel/hotel.module').then(m => m.HotelModule) },

  { path: 'voo', loadChildren: () => import('./pages/voo/voo.module').then(m => m.VooModule) },

  { path: '', pathMatch: 'full', redirectTo: 'hotel' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
