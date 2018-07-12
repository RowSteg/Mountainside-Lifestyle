import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutdoorsComponent }      from './outdoors/outdoors.component';

const routes: Routes = [
  { path: 'outdoors', component: OutdoorsComponent }
  
];
export const routerConfig: Routes = [
  {
      path: 'home',
  },
  {
      path: 'about',
  },
  {
      path: 'courses',
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];


@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
