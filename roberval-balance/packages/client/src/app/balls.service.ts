import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IBallSubmitResponse {
  iterations: number;
  result: number;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable()
export class BallsService {
  private url = '/api';

  constructor(private http: HttpClient) { }

  executeAlgorithm(balls: number[]): Observable<IBallSubmitResponse> {
    return this.http.post<IBallSubmitResponse>(this.url, { balls }, httpOptions);
  }
}
