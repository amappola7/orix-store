import { Component, Output, EventEmitter } from '@angular/core';
import { faLightbulb as faLightbulbSolid } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  screenMode: boolean = true;
  icons = {
    lightModeIcon: faLightbulbSolid,
    darkModeIcon: faLightbulbRegular
  };

  @Output() onChangeScreenMode = new EventEmitter<boolean>();

  constructor(
    private screenModeService : ScreenModeService
  ) {}

  ngOnInit() {
    this.screenMode = this.screenModeService.screenMode;
  }

  ngOnDestroy() {
    this.screenModeService.screenMode = this.screenMode;
  }

  changeScreenMode(): void {
    this.screenMode = !this.screenMode;
    this.onChangeScreenMode.emit(this.screenMode);
  }
}
