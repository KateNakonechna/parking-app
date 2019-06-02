import {IProperties} from './properties.interface';
import {IGeometry} from './geometry.interface';

export interface IFeature {
  type: string;
  properties: IProperties;
  geometry: IGeometry;
}
