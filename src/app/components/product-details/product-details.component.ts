import { Component } from '@angular/core';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  screenMode!: boolean;

  constructor (
    private screenModeService: ScreenModeService
  ) {}

  ngOnInit() {
    this.screenMode = this.screenModeService.screenMode;
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}
