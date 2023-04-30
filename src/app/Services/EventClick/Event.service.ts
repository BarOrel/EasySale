import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
     providedIn: 'root'
   })
export class EventService {
private subject = new Subject<any>();
constructor() { }

sendClickEvent() {
     console.log('click')
     this.subject.next(this.getEvent());
    }


    getEvent():Observable<any>{
     return this.subject.asObservable();
   }
  
}
