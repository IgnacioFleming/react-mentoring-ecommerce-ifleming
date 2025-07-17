import { describe, expect, it } from 'vitest';
import { styleByRating } from './styleByRating';
import { STAR_FILL } from '../types/types';

describe('styleByRating', () => {
  it('should return filled if rating is greater than index for more than 0.5', () => {
    expect(styleByRating(4.8, 4)).toBe(STAR_FILL.FILLED);
  });

  it('should return half-filled if rating is greater than index for less or equal than 0.5', () => {
    expect(styleByRating(4.5, 4)).toBe(STAR_FILL.HALF_FILLED);
  });

  it('should return empty if it does not match with any of the previous cases', () => {
    expect(styleByRating(3.5, 4)).toBe(STAR_FILL.EMPTY);
  });
});
