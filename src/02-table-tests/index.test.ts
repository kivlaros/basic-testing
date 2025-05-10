// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
  { description: 'add numbers', a: 5, b: 3, action: Action.Add, expected: 8 },
  { description: 'subtract numbers', a: 10, b: 4, action: Action.Subtract, expected: 6 },
  { description: 'multiply numbers', a: 7, b: 2, action: Action.Multiply, expected: 14 },
  { description: 'divide numbers', a: 20, b: 5, action: Action.Divide, expected: 4 },
  { description: 'exponentiate numbers', a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { description: 'zeros addition', a: 0, b: 0, action: Action.Add, expected: 0 },
  { description: 'invalid action', a: 5, b: 3, action: '%', expected: null },
  { description: 'string instead of a', a: '5', b: 3, action: Action.Add, expected: null },
  { description: 'string instead of b', a: 5, b: '3', action: Action.Add, expected: null },
];

describe('simpleCalculator table test', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)('$description',({a, b, action , expected})=>{
    let result = simpleCalculator({a,b,action})
    expect(result).toBe(expected)
  })
  // Consider to use Jest table tests API to test all cases above
});
