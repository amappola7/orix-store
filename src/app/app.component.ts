import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string = '/';
  screenMode: boolean = true;
  showMobileNavMenu: boolean = false;

  constructor() {}

  setCurrentRoute(route: string): void {
    this.currentRoute = route;
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }

  setShowMobileNavMenu(display: boolean): void {
    this.showMobileNavMenu = display;
  }
}
