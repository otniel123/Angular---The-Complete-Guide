import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(celsiusTemperature: number, convertsTo: 'F' | 'K'): unknown {
    if(convertsTo === 'F'){
      return celsiusTemperature * 9/5 + 32 + '°F';
    }
    return celsiusTemperature + 273.15 + 'K';
  }
}
