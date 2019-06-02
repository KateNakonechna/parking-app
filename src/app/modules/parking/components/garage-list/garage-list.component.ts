import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Data} from '../../models/data.model';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GarageListComponent {
  static perPage = 25;
  displayedColumns = ['Name', 'FreeSpaceShort', 'FreeSpaceLong', 'actions'];

  @Input() dataSource: Data[] = [];

  constructor(private readonly dialog: MatDialog) {}

  openDialog(row: Data): void {
    this.dialog.open(PopupComponent, {
      height: '440px',
      width: '700px',
      data: {
        lat: row.coordinates[1],
        lng: row.coordinates[0],
        name: row.Name,
        total: this.dataSource.length,
        currentAvailable: this.currentAvailableLength,
      }
    });
  }

  get currentAvailableLength(): number {
    return this.dataSource.filter(data => data.FreeSpaceLong > 0).length;
  }

  get dataSourceLength(): number {
    return this.dataSource ? this.dataSource.length : 0;
  }
}
