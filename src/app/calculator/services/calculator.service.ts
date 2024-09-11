import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM: string = '+';
  static readonly SUBTRACT: string = '-';
  static readonly DIVIDE: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() {
  }

  calculate(num1: number, num2: number, operacao: string): number {
    let result: number = num1;

    switch (operacao) {
      case CalculatorService.SUM:
        result = num1 + num2;
        break;
      case CalculatorService.SUBTRACT:
        result = num1 - num2;
        break
      case CalculatorService.DIVIDE:
        result = num1 / num2;
        break;
      case CalculatorService.MULTIPLICATION:
        result = num1 * num2;
        break;
      default:
        result = 0;
    }

    return result;
  }
}
