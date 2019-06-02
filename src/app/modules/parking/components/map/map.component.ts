import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ParkingService} from '../../../api-service/services/parking/parking.service';
import {GarageListComponent} from '../garage-list/garage-list.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  subscription: Subscription;
  coordinates;
  lat = 52.3362;
  lng = 4.8609;
  zoom = 12;
  iconUrl = '../../../assets/pin.png';

  constructor(private parkingService: ParkingService) {
  }

  ngOnInit() {
    // this.subscription = this.parkingService.getFeatures().subscribe(word => console.log(word));
    this.subscription = this.parkingService.getFeatures({
      per_page: GarageListComponent.perPage,
      page: 1
    }).subscribe(data => {
      this.coordinates = data.map((feature) => feature.coordinates);
    });

  }
}
