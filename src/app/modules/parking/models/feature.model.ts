import {Properties} from './properties.model';
import {Geometry} from './geometry.model';

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

