import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskEmail',
})
export class MaskEmailPipe implements PipeTransform {
  transform(email: string, charsToHide: number): unknown {
    const atIndex = email.indexOf('@');

    return email.slice(0, atIndex - charsToHide) + "*".repeat(charsToHide) + email.slice(atIndex);
  }
}
