import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParkingService} from './services/parking/parking.service';

@NgModule({
  declarations: [],
  providers: [ParkingService],
  imports: [
    CommonModule
  ],
})
export class ApiServiceModule {
}
