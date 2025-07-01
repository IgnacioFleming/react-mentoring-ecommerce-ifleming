import { describe, expect, it } from 'vitest';
import { composeQueryParams } from './utils';

type MockQueryParams = {
  mockLimit: number;
  mockSortBy: 'mockPropA' | 'mockPropB';
  mockOrderBy: 'asc' | 'desc';
};
describe('componseQueryParams', () => {
  const mockQueryParams: MockQueryParams = {
    mockLimit: 10,
    mockOrderBy: 'asc',
    mockSortBy: 'mockPropA',
  };

  it('should return an empty string if it is called with an empty object', () => {
    const queryParams = composeQueryParams<MockQueryParams>({});
    expect(queryParams).toBe('');
  });

  it('should return an empty string if it is called without args', () => {
    const queryParams = composeQueryParams<MockQueryParams>();
    expect(queryParams).toBe('');
  });

  it('should return "/?" followed by "key"="value" if its called with an arg with one property', () => {
    const queryParams = composeQueryParams<MockQueryParams>({ mockLimit: 2 });
    expect(queryParams).toBe('/?mockLimit=2');
  });

  it('should return a string concatenated with "&" after each key-value pair if it is called with more than one property', () => {
    const queryParams = composeQueryParams<MockQueryParams>(mockQueryParams);
    expect(queryParams).toBe('/?mockLimit=10&mockOrderBy=asc&mockSortBy=mockPropA');
  });
});
