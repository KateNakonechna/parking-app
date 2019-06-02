import {Feature} from './feature.model';
import {FeatureType} from '../enums/feture-type.enum';

export interface FeatureResponse {
  features: Feature[];
  type: FeatureType.collection;
}
