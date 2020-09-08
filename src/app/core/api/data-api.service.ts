import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const delayInMs = 1200;

@Injectable()
export class DataApiService<T extends { id: number }> {
  constructor(private http: HttpClient) {
  }

  find(id: any): Observable<T> {
    return this.http.get(this.getUrl())
      .pipe(
        map((o: object) => o as T),
        delay(delayInMs)
      );
  }

  update(id: number, changes: Partial<T>): Observable<T> {
    return this.http.patch(this.getSingleUrl({ id }), changes)
      .pipe(
        map((o: object) => o as T),
        delay(delayInMs),
      );
  }

  remove(entity: T): Observable<number> {
    const { id } = entity;
    return this.http.delete(this.getSingleUrl(entity))
      .pipe(
        map(() => id),
        delay(delayInMs)
      );
  }

  create(entity: any): Observable<T> {
    return this.http.post(this.getUrl(), entity)
      .pipe(
        map((o: object) => o as T),
        delay(delayInMs)
      );
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.getUrl())
      .pipe(
        map((items: object[]) => items as T[]),
        delay(delayInMs)
      );
  }

  getUrl(): string {
    throw new Error('Abstract method');
  }

  getSingleUrl({ id }): string {
    return `${this.getUrl()}/${id}`;
  }

}
