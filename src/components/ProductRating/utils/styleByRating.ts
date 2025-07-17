import { STAR_FILL, StarFill } from '../types/types';

export const styleByRating = (rating: number, index: number): StarFill => {
  if (rating - index > 0.5) return STAR_FILL.FILLED;
  if (rating - index > 0) return STAR_FILL.HALF_FILLED;
  return STAR_FILL.EMPTY;
};
