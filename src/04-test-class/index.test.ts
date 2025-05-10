// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';
import _ from 'lodash';

describe('BankAccount', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should create account with initial balance', () => {
    const account = getBankAccount(100);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(50);
    expect(() => account.withdraw(100)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account1 = getBankAccount(50);
    const account2 = getBankAccount(0);
    expect(() => account1.transfer(100, account2)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(100);
    expect(() => account.transfer(50, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const account = getBankAccount(100);
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(100);
    account.withdraw(30);
    expect(account.getBalance()).toBe(70);
  });

  test('should transfer money', () => {
    const account1 = getBankAccount(100);
    const account2 = getBankAccount(0);
    account1.transfer(40, account2);
    expect(account1.getBalance()).toBe(60);
    expect(account2.getBalance()).toBe(40);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest.spyOn(_, 'random').mockReturnValueOnce(90).mockReturnValueOnce(1);
    const account = getBankAccount(0);
    const balance = await account.fetchBalance();
    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(_, 'random').mockReturnValueOnce(90).mockReturnValueOnce(1);
    const account = getBankAccount(0);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(90);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(_, 'random').mockReturnValueOnce(0).mockReturnValueOnce(0);
      const account = getBankAccount(0);
      await expect(account.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
