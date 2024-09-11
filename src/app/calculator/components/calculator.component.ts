import {Component, OnInit} from '@angular/core';
import {CalculatorService} from "../services";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1: string | null;
  private number2: string | null;
  private result: number | null;
  private operation: string | null;

  constructor(private calculatorService: CalculatorService) {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  ngOnInit(): void {
    this.clean();
  }

  clean(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  addNumber(numberAdd: string): void {
    if (this.operation === null) {
      this.number1 = this.concatNumber(this.number1 ?? '0', numberAdd);
    } else {
      this.number2 = this.concatNumber(this.number2 ?? '0', numberAdd);
    }
  }

  concatNumber(numberActual: string, numConcat: string): string {
    if (numberActual === '0' || numberActual === null) {
      numberActual = '';
    }

    if (numConcat === '.' && numberActual === '') {
      return '0.';
    }

    if (numConcat === '.' && numberActual.indexOf('.') > -1) {
      return numberActual;
    }

    return numberActual + numConcat;
  }

  setOperation(operation: string): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }
    if (this.number2 !== null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.number1  || '0'),
        parseFloat(this.number2),
        this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.calculatorService.calculate(
      parseFloat(this.number1  || '0'),
      parseFloat(this.number2),
      this.operation ?? '');
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }
    return this.number1  || '0';
  }
}
