import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/icart-item';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _localStorageProductsInCart = localStorage.getItem("products-in-cart") || "[]";
  _productsInCart: number[] = JSON.parse(this._localStorageProductsInCart);
  get productsInCart(): number[] {
    return this._productsInCart;
  }

  _localStorageCart = localStorage.getItem("shopping-cart") || "[]";
  _cart: ICartItem[]  = JSON.parse(this._localStorageCart);
  get cart(): ICartItem[] {
    return this._cart;
  }

  constructor() { }

  addProduct(productToAdd: IProduct, quantityToAdd: number): void {
    const item: ICartItem = {
      quantity: quantityToAdd,
      product: productToAdd
    };

    if(!this._productsInCart.includes(item.product.id)) {
      this._cart.push(item);
      this._productsInCart.push(item.product.id);
    }

    localStorage.setItem("products-in-cart", JSON.stringify(this._localStorageProductsInCart));
    localStorage.setItem("shopping-cart", JSON.stringify(this._cart));

  }

  clearCart(): void {
    this._cart = [];
    localStorage.setItem("shopping-cart", JSON.stringify(this._cart));

    this._productsInCart = [];
    localStorage.setItem("products-in-cart", JSON.stringify(this._productsInCart));
  }
}
