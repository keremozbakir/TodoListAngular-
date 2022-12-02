import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PercentageCalculatorService {

  constructor() { }

  calculatePercentage(todo: number, done: number) {
    var total = todo + done
    var perc = done / total
    
    console.log(Math.ceil(perc * 100))
    // if (done == 0) {
    //   return 0
    // }
    return Math.ceil(perc * 100)
  }
}
