import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';


@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzInputModule,
    NzListModule
  ],
  exports: [
    NzLayoutModule,
    NzInputModule,
    NzListModule
  ]
})
export class NgZorroModule {}
