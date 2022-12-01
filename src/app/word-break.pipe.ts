import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordBreak'
})
export class WordBreakPipe implements PipeTransform {

  transform(value: any ): any {
    if (value.length > 180) {
      return value.slice(0,180)+"..."
    }
    else {
      return value
    }
  }

}
