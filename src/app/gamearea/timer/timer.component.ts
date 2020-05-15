import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss', '../../app.component.scss']
})
export class TimerComponent implements OnInit {

  timeString: string;

  constructor() { }

  ngOnInit(): void {
    this.timeString = "--";
    //todo subscribe to timer service
  }

  ngOnDestroy(): void {
    //todo unsub from timer service
  }

}
