import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumImpure',
  pure: false
})
export class SumImpurePipe implements PipeTransform {
  transform(numbers: number[]) {
    console.log('PIPE IMPURE EXECUTOU');

    return numbers.reduce((sum, number) => sum + number,
  0);
  }
}
