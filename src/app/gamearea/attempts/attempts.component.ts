import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss', '../../app.component.scss']
})
export class AttemptsComponent implements OnInit {

  attempts: number;

  constructor() { 
  	this.attempts = 0;
  }

  ngOnInit(): void {
    this.attempts = 0;

    //todo - subscribe to service
  }

  ngOnDestroy(): void {
    // unsubscribe
  }

}
