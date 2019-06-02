import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setTextFreeSpaceLong'
})
export class SetTextFreeSpaceLongPipe implements PipeTransform {

  transform(value: number): string {
    return value > 0 ? 'Free' : 'Full';
  }

}
