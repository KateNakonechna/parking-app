import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ParkingService} from '../../../api-service/services/parking/parking.service';
import {Observable} from 'rxjs';
import {Data} from '../../models/data.model';
import {GarageListComponent} from '../garage-list/garage-list.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
  dataSource$: Observable<Data[]>;

  constructor(private readonly parkingService: ParkingService) { }

  ngOnInit() {
    this.dataSource$ = this.parkingService.getFeatures({
      per_page: GarageListComponent.perPage,
      page: 1
    });
  }
}
