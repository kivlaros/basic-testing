// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 5, b: 3, action: Action.Add, expected: 8 },
  { a: 10, b: 4, action: Action.Subtract, expected: 6 },
  { a: 7, b: 2, action: Action.Multiply, expected: 14 },
  { a: 20, b: 5, action: Action.Divide, expected: 4 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 0, b: 0, action: Action.Add, expected: 0 },
  { a: -5, b: 3, action: Action.Subtract, expected: -8 },
  { a: 5, b: 3, action: '%', expected: null },
  { a: '5', b: 3, action: Action.Add, expected: null },
  { a: 5, b: '3', action: Action.Add, expected: null },
];

describe('simpleCalculator table test', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)('given $a and $b with action "$action", returns $expected', ({ a, b, action, expected }) => {
    let result = simpleCalculator({ a, b, action });
    expect(result).toBe(expected);
  });
  // Consider to use Jest table tests API to test all cases above
});
