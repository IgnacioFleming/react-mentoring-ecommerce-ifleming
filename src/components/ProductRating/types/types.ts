export const STAR_FILL = {
  EMPTY: 'empty',
  HALF_FILLED: 'half-filled',
  FILLED: 'filled',
} as const;

export type StarFill = (typeof STAR_FILL)[keyof typeof STAR_FILL];
