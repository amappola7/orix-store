import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  screenSize: number = window.screen.width;
  mobileMenuDisplay: boolean = false;
  icons = {
    barsMenuIcon: faBars,
    shoppingCartIcon: faShoppingCart
  };

  @Input() inputScreenMode!: boolean;
  @Output() onRouteChange = new EventEmitter<string>();
  @Output() onDisplayMobileMenu = new EventEmitter<boolean>();

  changeRoute(route: string): void {
    this.onRouteChange.emit(route);
  }

  displayMobileMenu(): void {
    this.mobileMenuDisplay = !this.mobileMenuDisplay;
    this.onDisplayMobileMenu.emit(this.mobileMenuDisplay);
  }
}
