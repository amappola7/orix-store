import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  screenMode: boolean = true;

  constructor() { }

  setScreenMode(): Observable<boolean> {
    this.screenMode = !this.screenMode;
    return of(this.screenMode);
  }
}
