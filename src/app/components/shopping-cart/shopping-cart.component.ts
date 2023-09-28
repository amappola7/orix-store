import { Component } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/icart-item';
import { CartService } from 'src/app/services/cart.service';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cart: ICartItem[] = [];
  icons = {
    addProductIcon: faPlus,
    removeProductIcon: faMinus
  }

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // const localStorageCart = localStorage.getItem("shopping-cart") || "[]";
    // this.cart = JSON.parse(localStorageCart);
    this.cart = this.cartService.cart;
  }

  ngOnDestroy() {
    localStorage.setItem('shopping-cart', JSON.stringify(this.cart));
  }
}
