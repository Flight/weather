import { NgModule } from '@angular/core';
import { ForecastComponent } from './forecast/forecast.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'forecast',
    component: ForecastComponent
  },
  {
    path: 'forecast/:cityId',
    component: ForecastComponent
  },
  {
    path: '**',
    redirectTo: 'forecast'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
