import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./theme/main-layout/main-layout.module').then(m => m.MainLayoutModule)},
  // {path: 'weather', loadChildren: () => import('./pages/weather/weather.module').then(m => m.WeatherModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
