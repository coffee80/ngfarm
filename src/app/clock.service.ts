import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  clock:Observable<number> = interval(2000);


  constructor() { }
}
