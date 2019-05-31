import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ParkingService} from '../../services/parking.service';
import {Subscription} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit{
  subscription: Subscription;
  features
  constructor(public parkingService: ParkingService) { }

  ngOnInit() {
    // this.subscription = this.parkingService.getFeatures().subscribe(word => console.log(word));
    this.subscription = this.parkingService.getFeatures().subscribe(word => this.features = word.features);


  }


}
