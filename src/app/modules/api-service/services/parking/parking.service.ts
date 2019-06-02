import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BaseFilter} from '../../../parking/models/filters/base-filter.model';
import {environment} from '../../../../../environments/environment';
import {map, pluck} from 'rxjs/operators';
import {Data} from '../../../parking/models/data.model';
import {Feature} from '../../../parking/models/feature.model';

@Injectable()
export class ParkingService {
  constructor(private  http: HttpClient) {
  }

  getFeatures(params: BaseFilter): Observable<Data[]> {
    return this.http.get<Data[]>(`${environment.apiUrl}/${environment.features}`, {
      params: {
        per_page: `${params.per_page}`
      }
    }).pipe(
      pluck('features'),
      map((features: Feature[]) => features.filter(feature => feature.properties.layers['parking.garage'].data.Name)),
      map(features => {
        return features.map(currentFeature => {
          const data = currentFeature.properties.layers['parking.garage'].data;
          data.coordinates = currentFeature.geometry.coordinates;
          return data;
        });
      })
    );
  }
}

