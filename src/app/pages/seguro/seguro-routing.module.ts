import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurosComponent } from './seguros/seguros.component';

const routes: Routes = [

  { path: '', component: SegurosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguroRoutingModule { }
