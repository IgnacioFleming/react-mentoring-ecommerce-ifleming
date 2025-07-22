import { describe, expect, it } from 'vitest';
import { QueryParams } from '../../types/products';
import { composeQueryParams, formatCurrency } from './utils';

describe('componseQueryParams', () => {
  const mockQueryParams: QueryParams<{ rating: unknown }> = {
    limit: 8,
    order: 'desc',
    sortBy: 'rating',
  };

  it('should return an empty string if it is called with an empty object', () => {
    const queryParams = composeQueryParams({});
    expect(queryParams).toBe('');
  });

  it('should return an empty string if it is called without args', () => {
    const queryParams = composeQueryParams();
    expect(queryParams).toBe('');
  });

  it('should return "/?" followed by "key"="value" if its called with an arg with one property', () => {
    const queryParams = composeQueryParams({ limit: 2 });
    expect(queryParams).toBe('/?limit=2');
  });

  it('should return a string concatenated with "&" after each key-value pair if it is called with more than one property', () => {
    const queryParams = composeQueryParams(mockQueryParams);
    expect(queryParams).toBe('/?limit=8&order=desc&sortBy=rating');
  });
});

describe('formatCurrency', () => {
  it('should format number correctly to $#,###.## format', () => {
    expect(formatCurrency(1492.33)).toBe('$1,492.33');
  });
});
