import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPipe',
})
export class RoundPipePipe implements PipeTransform {
  transform(input: number) {
    var a = Math.floor(input).toString();
    return a;
  }
}
