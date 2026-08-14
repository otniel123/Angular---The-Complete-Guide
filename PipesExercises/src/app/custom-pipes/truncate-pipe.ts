import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, lenghtNum: number): unknown {
    if(value.length <= lenghtNum){
      return value;
    }

    return value.slice(0, lenghtNum).trim() + '...';
  }
}
