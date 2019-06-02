import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setTextFreeSpaceColor'
})
export class SetTextFreeSpaceColorPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return !value ? '#F44336' :  '#81C784';
  }

}
