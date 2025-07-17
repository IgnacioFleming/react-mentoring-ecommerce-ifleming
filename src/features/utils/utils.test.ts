import { describe, expect, it } from 'vitest';
import { calculateSkeletonQuantity } from './utils';

describe('ProductList utils', () => {
  const mockLimit = 24;
  const mockProductQuantity = 24;
  it('should return limit if total is falsy', () => {
    const mockTotal = 0;
    const quantity = calculateSkeletonQuantity(mockTotal, mockProductQuantity, mockLimit);
    expect(quantity).toBe(mockLimit);
  });

  it('should return limit if total minus limit is greater than limit', () => {
    const mockTotal = 100;
    const quantity = calculateSkeletonQuantity(mockTotal, mockProductQuantity, mockLimit);
    expect(quantity).toBe(mockLimit);
  });

  it('should return the difference between total and limit if this difference is lower than limit', () => {
    const mockTotal = 30;
    const quantity = calculateSkeletonQuantity(30, mockProductQuantity, mockLimit);
    expect(quantity).toBe(mockTotal - mockProductQuantity);
  });
});
