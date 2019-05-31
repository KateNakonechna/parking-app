import {ILayers} from './layers.interface';

export interface IProperties {
  cdk_id: string;
  title: string;
  layer: string;
  layers: ILayers;
}
