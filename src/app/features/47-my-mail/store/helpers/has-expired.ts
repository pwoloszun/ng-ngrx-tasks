import { from } from 'core-js/fn/array';

export const hasExpired = (fromDt: number, ttl: number): boolean => {
  if (!fromDt) {
    return true;
  } else {
    return fromDt + ttl < Date.now();
  }
};
