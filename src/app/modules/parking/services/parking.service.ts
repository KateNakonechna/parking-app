import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IFeature} from '../models/feature.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  features: Observable<IFeature[]>;

  constructor(private  http: HttpClient) {
  }

  getFeatures() {
    return this.features = this.http.get<any>(environment.features);
  }
}

