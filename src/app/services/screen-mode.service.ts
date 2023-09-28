import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenModeService {
  _screenMode: boolean = true;
  get screenMode(): boolean {
    return this._screenMode
  }
  set screenMode(mode: boolean) {
    this._screenMode = mode;
  }

  constructor() { }

}
