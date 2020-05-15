import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss', '../../../app.component.scss']
})
export class TileComponent implements OnInit {
  exposed: string;
  icon: string;
  matched: boolean;

  constructor() { }

  onClick(): void {
    //todo - send event and self to game service
  }

  ngOnInit(): void {
    this.exposed = 'todo';
    this.icon = 'todo';
    this.matched = false;
  }

}
