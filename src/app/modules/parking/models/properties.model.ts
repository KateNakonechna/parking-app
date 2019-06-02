import {Layers} from './layers.model';

export interface Properties {
  cdk_id: string;
  title: string;
  layer: string;
  layers: Layers;
}
