// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi} from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  throttle: jest.fn((fn) => fn),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;
//const mockedThrottle = throttle as jest.Mock;

describe('throttledGetDataFromApi', () => {
  const testData = { id: 1, title: 'test' };
  const relativePath = '/posts/1';

  beforeEach(() => {
    mockedAxios.create.mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: testData }),
    } as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create axios instance with correct base URL', async () => {
    await throttledGetDataFromApi(relativePath);
    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should call axios.get with provided relative path', async () => {
    await throttledGetDataFromApi(relativePath);
    const axiosInstance = mockedAxios.create();
    expect(axiosInstance.get).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi(relativePath);
    expect(result).toBe(testData);
  });

  test('should apply throttle with correct time', () => {
  });
});
