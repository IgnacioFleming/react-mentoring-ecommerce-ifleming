type StarFill = 'empty' | 'half-filled' | 'filled';

export const styleByRating = (rating: number, index: number): StarFill => {
  if (rating - index > 0.5) return 'filled';
  if (rating - index > 0) return 'half-filled';
  return 'empty';
};
