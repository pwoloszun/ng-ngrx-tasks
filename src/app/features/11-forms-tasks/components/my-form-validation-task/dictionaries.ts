import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const countries = [
  { id: 'PL', name: 'Poland' },
  { id: 'UK', name: 'United Kingdom' },
  { id: 'USA', name: 'USA' },
  { id: 'RU', name: 'Russia' },
];

export const interestTypes = [
  { id: 'hobby', name: 'Hobbies & Other' },
  { id: 'sport', name: 'Sport' },
  { id: 'culture', name: 'Culture' }
];

const interestsMap = {
  hobby: ['patchwork', 'programming', 'video gaming'],
  sport: ['soccer', 'basketball', 'hockey', 'ski-jumping'],
  culture: ['books', 'films', 'poetry'],
};

export function getInterestsByType$(interestType): Observable<string[]> {
  const resultVal = interestsMap[interestType] || [];
  return of(resultVal).pipe(
    delay(1200)
  );
}
