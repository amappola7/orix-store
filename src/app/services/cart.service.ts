import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/icart-item';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _localStorageCart = localStorage.getItem("shopping-cart") || "[]";
  _cart: ICartItem[]  = JSON.parse(this._localStorageCart);;
  get cart(): ICartItem[] {
    return this._cart;
  }

  constructor() { }

  addProduct(productToAdd: IProduct, quantityToAdd: number): void {
    const item: ICartItem = {
      quantity: quantityToAdd,
      product: productToAdd
    };

    this._cart.push(item);
    localStorage.setItem("shopping-cart", JSON.stringify(this._cart));
  }
}
