import { Component, Output, EventEmitter } from '@angular/core';
import { faLightbulb as faLightbulbSolid } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons';

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

  changeScreenMode(): void {
    this.screenMode = !this.screenMode;
    this.onChangeScreenMode.emit(this.screenMode);
  }
}
