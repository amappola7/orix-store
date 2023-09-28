import { Component } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/icart-item';
import { CartService } from 'src/app/services/cart.service';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cart: ICartItem[] = [];
  screenMode!: boolean;
  icons = {
    addProductIcon: faPlus,
    removeProductIcon: faMinus
  }

  constructor(
    private cartService: CartService,
    private screenModeService: ScreenModeService
  ) {}

  ngOnInit() {
    // const localStorageCart = localStorage.getItem("shopping-cart") || "[]";
    // this.cart = JSON.parse(localStorageCart);
    this.cart = this.cartService.cart;
    this.screenMode = this.screenModeService.screenMode;
  }

  ngOnDestroy() {
    localStorage.setItem('shopping-cart', JSON.stringify(this.cart));
    this.screenModeService.screenMode = this.screenMode;
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}


