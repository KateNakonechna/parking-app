import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageItemComponent } from './components/garage-item/garage-item.component';
import { GarageListComponent } from './components/garage-list/garage-list.component';
import {SharedModule} from '../shared/shared.module';
import {ParkingRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [GarageItemComponent, GarageListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ParkingRoutingModule
  ]
})
export class ParkingModule { }
