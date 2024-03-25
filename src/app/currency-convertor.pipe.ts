import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
  standalone: true
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: string): number {
    return parseInt(value) + 84;
  }

}
