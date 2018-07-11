import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutdoorsComponent }      from './outdoors/outdoors.component';

const routes: Routes = [
  { path: 'outdoors', component: OutdoorsComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
