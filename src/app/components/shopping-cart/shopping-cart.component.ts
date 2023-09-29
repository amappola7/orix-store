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
  productsInCart: number[] = [];
  totalCart: number = 0;
  screenMode!: boolean;
  icons = {
    addProductIcon: faPlus,
    removeProductIcon: faMinus
  };

  constructor (
    private cartService: CartService,
    private screenModeService: ScreenModeService
  ) {}

  ngOnInit() {
    this.cart = this.cartService.cart;
    this.productsInCart = this.cartService.productsInCart;
    this.totalCart = this.cartService.calculateTotalInCart();
    this.screenMode = this.screenModeService.screenMode;
  }

  ngOnDestroy() {
    localStorage.setItem('shopping-cart', JSON.stringify(this.cart));
    localStorage.setItem('products-in-cart', JSON.stringify(this.productsInCart));
    this.screenModeService.screenMode = this.screenMode;
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
    this.totalCart = this.cartService.calculateTotalInCart();
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }

  addQuantityToProduct(id: number) {
    this.cart = this.cartService.addQuantity(id);
    this.totalCart = this.cartService.calculateTotalInCart();
  }
}


