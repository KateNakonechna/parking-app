import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Data} from '../../models/data.model';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  @Input() data: Data[] = [];

  lat = 52.3362;
  lng = 4.8609;
  zoom = 12;
  iconUrl = environment.parkingIconUrl;

  get coordinates(): number[][] {
    return this.data ? this.data.map((feature) => feature.coordinates) : [];
  }
}
