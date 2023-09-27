import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faShoppingCart, faX, faXmark} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-mobile-nav-menu',
  templateUrl: './mobile-nav-menu.component.html',
  styleUrls: ['./mobile-nav-menu.component.scss']
})
export class MobileNavMenuComponent {
  icons = {
    shoppingCartIcon: faShoppingCart,
    exitIcon: faXmark
  };

  @Input() inputScreenMode!: boolean;
  @Output() onRouteChange = new EventEmitter<string>();
  @Output() onDisplayMobileMenu = new EventEmitter<boolean>();

  changeRoute(route: string): void {
    this.onRouteChange.emit(route);
    this.onDisplayMobileMenu.emit(false);
  }

  displayMobileMenu(): void {
    this.onDisplayMobileMenu.emit(false);
  }
}
