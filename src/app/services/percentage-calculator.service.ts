import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PercentageCalculatorService {

  constructor() { }

  calculatePercentage(todo: number, done: number) {
    var total = todo + done
    var perc = done / total
     
    return Math.ceil(perc * 100)
  }
}
