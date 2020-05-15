import { Component, OnInit } from '@angular/core';
import { TileComponent } from './tile/tile.component';

const _tileCounts = 16;

@Component({
  selector: 'app-tilearea',
  templateUrl: './tilearea.component.html',
  styleUrls: ['./tilearea.component.scss', '../../app.component.scss']
})
export class TileareaComponent implements OnInit {

  tiles: TileComponent[];

  constructor() { }

  ngOnInit(): void {
  	var i: number;

    // todo iterate over icons to initialize  
  	for (i = 0; i < _tileCounts; i++) {
      let tile: TileComponent = new TileComponent();
  	  this.tiles.push(tile);
  	}
  }
}
