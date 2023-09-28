import { Component } from '@angular/core';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  screenMode!: boolean;

  constructor(
    private screenModeService: ScreenModeService
  ) {}

  ngOnInit() {
    this.screenMode = this.screenModeService.screenMode;
  }

  ngOnDestroy() {
  this.screenModeService.screenMode = this.screenMode;
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}
