import {IFeature} from './feature.interface';
import {FeatureType} from '../enums/feture-type.enum';

export interface FeatureResponse {
  features: IFeature[];
  type: FeatureType.collection;
}
