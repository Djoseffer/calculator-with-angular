import {inject, TestBed} from '@angular/core/testing';

import {CalculatorService} from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ensure that 1 + 4 equals 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.calculate(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    }));

  it('should ensure that 1 - 4 equals -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let subtract = service.calculate(1, 4, CalculatorService.SUBTRACT);
      expect(subtract).toEqual(-3);
    }));

  it('should ensure that 1 / 4 equals 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let divide = service.calculate(1, 4, CalculatorService.DIVIDE);
      expect(divide).toEqual(0.25);
    }))

  it('should ensure that 1 * 4 equals 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let multiply = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(multiply).toEqual(4);
    }));

  it('should return 0 to invalid operation',
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperation = service.calculate(1, 4, '%');
      expect(invalidOperation).toEqual(0);
    }));
});
