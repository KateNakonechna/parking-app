import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Info} from '../../models/info.model';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
  iconUrl = environment.parkingIconUrl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Info) {
  }
}
