import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GarageListComponent} from './components/garage-list/garage-list.component';
import {SharedModule} from '../shared/shared.module';
import {ParkingRoutingModule} from './app-routing.module';
import {IndexComponent} from './components/index/index.component';
import {ApiServiceModule} from '../api-service/api-service.module';
import {AgmCoreModule} from '@agm/core';
import {PopupComponent} from './components/popup/popup.component';
import {MapComponent} from './components/map/map.component';
import { SetTextFreeSpaceLongPipe } from './pipes/set-text-free-space-long/set-text-free-space-long.pipe';
import { SetTextFreeSpaceColorPipe } from './pipes/set-text-free-space-color/set-text-free-space-color.pipe';



@NgModule({
  declarations: [GarageListComponent, IndexComponent, MapComponent, PopupComponent, SetTextFreeSpaceLongPipe, SetTextFreeSpaceColorPipe],
  entryComponents: [PopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    ParkingRoutingModule,
    ApiServiceModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: []
})
export class ParkingModule {
}
