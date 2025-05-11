// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule = jest.requireActual<typeof import('./index')>('./index');
  return{
    ...originalModule,
    mockOne: ()=>{},
    mockTwo: ()=>{},
    mockThree:()=>{}
  }
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  beforeEach(()=>{
    jest.spyOn(console, 'log').mockImplementation(() => {});
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    mockOne()
    mockTwo()
    mockThree()
    expect(console.log).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    unmockedFunction()
    expect(console.log).toHaveBeenCalledWith('I am not mocked');
  });
});
