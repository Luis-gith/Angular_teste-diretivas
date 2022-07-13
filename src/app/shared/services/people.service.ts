import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPpl():Observable<any> {
    let pplArray = [
      {
        firstName: 'Luis',
        lastName: 'Belasco',
        age: 18,
     },
     {
       firstName: 'Arthur',
       lastName: 'Raspanti',
       age: 18,
     },
     {
       firstName: 'Gabriel',
       lastName: 'Fagundes',
       age: 18,
     },
     {
       firstName: 'Samuel',
       lastName: 'Levi',
       age: 18,
     },
    ];

    return of(pplArray);
  };
}
