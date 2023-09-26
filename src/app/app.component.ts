import { Component } from '@angular/core';
import { IProduct } from './interfaces/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  screenMode!: boolean;

  setScreenMode(mode: boolean) {
    this.screenMode = mode;
  }

  onComponentLoaded(mode: boolean) {
    mode = this.screenMode;
  }
}
