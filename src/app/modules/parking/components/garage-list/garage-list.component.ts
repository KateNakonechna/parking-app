import {Component, OnInit} from '@angular/core';
import {ParkingService} from '../../../api-service/services/parking/parking.service';
import {from, of, Subscription} from 'rxjs';
import {IProperties} from '../../models/properties.interface';
import {IGeometry} from '../../models/geometry.interface';
import {IFeature} from '../../models/feature.interface';
import {IData} from '../../models/data.interface';
import {MatDialog} from '@angular/material/dialog';
import {MapComponent} from '../map/map.component';
import {PopupComponent} from '../popup/popup.component';
import {filter, map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss']
})
export class GarageListComponent implements OnInit {
  static perPage = 25;
  subscription: Subscription;
  dataSource: IData[];
  displayedColumns = ['Name',  'FreeSpaceShort', 'FreeSpaceLong', 'actions'];

  constructor(private parkingService: ParkingService,
              public dialog: MatDialog) {
  }

  openDialog(row: IData) {
    console.log(row);
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '440px',
      width: '700px',
      data: {
        lat: row.coordinates[1],
        lng: row.coordinates[0],
        name: row.Name,
        total: this.dataSource.length,
        currentAvailable: this.currentAvailable
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.subscription = this.parkingService.getFeatures({
      per_page: GarageListComponent.perPage,
      page: 1
    }).subscribe(data => {
      this.dataSource = data;
    });
  }

  get currentAvailable(): number {
    return this.dataSource.filter(data => data.FreeSpaceLong > 0).length;
  }
}
