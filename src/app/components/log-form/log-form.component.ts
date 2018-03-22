import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';

import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: Boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });

  }
  onSubmit() {
    if (this.isNew) {
      const newLog = {
        id: this.generatId(),
        text: this.text,
        date: new Date()

        // this.logService.addLog(newLog);
      };
    } else {
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      // this.logService.updateLog(updLog);
    }
  }
  /* tslint:disable:no-bitwise */
  generatId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    /* tslint:enable:no-bitwise */
  }
}
