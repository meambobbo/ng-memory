import { Component, OnInit } from '@angular/core';
import { Messages } from './messages';

@Component({
  selector: 'app-messagearea',
  templateUrl: './messagearea.component.html',
  styleUrls: ['./messagearea.component.scss', '../../app.component.scss']
})
export class MessageareaComponent implements OnInit {

  message: string;

  constructor() {
    this.message = Messages.welcome;
  }

  ngOnInit(): void {
    this.message = Messages.welcome;
    //todo subscribe to message service
  }

  ngOnDestroy(): void {
    //todo unsub
  }

}
