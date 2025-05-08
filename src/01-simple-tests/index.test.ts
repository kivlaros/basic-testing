// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({a:7,b:8,action:Action.Add});
    expect(result).toBe(15);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({a:7,b:8,action:Action.Subtract});
    expect(result).toBe(-1);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({a:7,b:8,action:Action.Multiply});
    expect(result).toBe(56);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({a:10,b:2,action:Action.Divide});
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({a:10,b:2,action:Action.Exponentiate});
    expect(result).toBe(100);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({a:10,b:2,action:'#'});
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({a:'test',b:'test',action:Action.Divide});
    expect(result).toBe(null);
  });
});
