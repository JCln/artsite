import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WPageComponent } from './total-check-lang/wpage/wpage.component';

const routes: Routes = [
  {path: 'wpage', component: WPageComponent},
  {path: '', redirectTo: 'page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
