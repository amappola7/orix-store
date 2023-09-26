import { Component, Input } from '@angular/core';
import { faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  screenSize: number = window.screen.width;
  icons = {
    barsMenuIcon: faBars,
    shoppingCartIcon: faShoppingCart
  };

  @Input() inputScreenMode!: boolean;

}
