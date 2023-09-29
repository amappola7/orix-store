import { Component } from '@angular/core';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {
  screenMode!: boolean;

  constructor(
    private screenModeService: ScreenModeService
  ) {}

  ngOnInit() {
    this.screenMode = this.screenModeService.screenMode;
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}
