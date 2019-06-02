import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GarageItemComponent} from './components/garage-item/garage-item.component';
import {GarageListComponent} from './components/garage-list/garage-list.component';
import {SharedModule} from '../shared/shared.module';
import {ParkingRoutingModule} from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {IndexComponent} from './components/index/index.component';
import {ApiServiceModule} from '../api-service/api-service.module';
import {MatTableModule} from '@angular/material/table';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [GarageItemComponent, GarageListComponent, IndexComponent, MapComponent, PopupComponent],
  entryComponents: [PopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    ParkingRoutingModule,
    MatTableModule,
    ApiServiceModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqXrnj73VHPl_w7z2TNKYBKGjqHzynF1k'
    })
  ],
  providers: []
})
  export class ParkingModule {
}
