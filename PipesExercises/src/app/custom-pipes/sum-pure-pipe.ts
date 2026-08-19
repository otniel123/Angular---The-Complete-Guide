import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumPure',
})
export class SumPurePipe implements PipeTransform {
  transform(numbers: number[]) {
    console.log('PIPE PURE EXECUTOU');

    return numbers.reduce((sum, number) => sum + number,
  0);
  }
}
