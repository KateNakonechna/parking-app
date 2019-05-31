import {Component, Input, OnInit} from '@angular/core';
import {IFeature} from '../../models/feature.interface';

@Component({
  selector: 'app-garage-item',
  templateUrl: './garage-item.component.html',
  styleUrls: ['./garage-item.component.scss']
})
export class GarageItemComponent implements OnInit {
  @Input() feature: IFeature;
  constructor() { }

  ngOnInit() {
  }

}
