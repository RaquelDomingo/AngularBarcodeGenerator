import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  colors: string[];
  barcode: string[];

  constructor() {
    this.title = 'Retro Barcode Generator';
    this.colors = ['MediumAquaMarine', 'MediumBlue', 'DarkCyan', 'AquaMarine', 'CadetBlue', 'CornflowerBlue', 'DarkBlue', 'DarkGreen', 'DarkSeaGreen', 'DarkSlateGray', 'ForestGreen', 'LightSeaGreen', 'LimeGreen', 'MediumSeaGreen', 'MediumSpringGreen', 'SeaGreen'];
    this.barcode = [];
    for (let x = 0; x < 10; x++){
      this.barcode[x] = this.colors[Math.floor(Math.random()*this.colors.length)];
    }
  }
}
