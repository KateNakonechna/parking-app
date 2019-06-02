import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FeatureResponse} from '../../../parking/models/feature-response.model';
import {BaseFilter} from '../../../parking/models/filters/base-filter.model';
import {environment} from '../../../../../environments/environment';
import {map, pluck} from 'rxjs/operators';
import {IData} from '../../../parking/models/data.interface';
import {IFeature} from '../../../parking/models/feature.interface';

@Injectable()
export class ParkingService {
  constructor(private  http: HttpClient) {
  }

  getFeatures(params: BaseFilter): Observable<IData[]> {
    return this.http.get<IData[]>(`${environment.apiUrl}/${environment.features}`, {
      params: {
        per_page: `${params.per_page}`
      }
    }).pipe(
      pluck('features'),
      map((features: IFeature[]) => features.filter(feature => feature.properties.layers['parking.garage'].data.Name)),
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

