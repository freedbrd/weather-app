import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          {path: '', redirectTo: 'weather', pathMatch: 'full'},
          {path: 'weather', loadChildren: () => import('../../pages/weather/weather.module').then(m => m.WeatherModule)},
        ],
      },
    ]),
  ],
})
export class MainLayoutModule {}
