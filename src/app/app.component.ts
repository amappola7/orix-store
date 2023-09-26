import { Component } from '@angular/core';
import { IProduct } from './interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  screenMode: boolean = true;
  currentRouteParams: string[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentRouteParams = this.route.snapshot.paramMap.keys;
  }

  setScreenMode(mode: boolean) {
    this.screenMode = mode;
  }
}
