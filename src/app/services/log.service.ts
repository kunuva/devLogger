import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date ('12/06/2018 12:54:23') },
      {id: '2', text: 'Added Bootstrap', date: new Date ('04/06/2018 12:56:23') },
      {id: '3', text: 'Added Logs Component', date: new Date ('06/06/2018 12:58:23') }
    ];
   }

   getLogs(): Observable<Log[]> {
     return of(this.logs);
   }

    setFormLog(log: Log) {
      this.logSource.next(log);
    }
}
