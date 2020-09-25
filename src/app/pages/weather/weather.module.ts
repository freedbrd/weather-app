import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { RouterModule, Routes } from '@angular/router';
import { CitySearchComponent } from './city-search/city-search.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {path: '', component: WeatherComponent}
];

@NgModule({
  declarations: [WeatherComponent, CitySearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WeatherModule { }
