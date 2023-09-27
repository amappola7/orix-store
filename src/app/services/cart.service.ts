import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/icart-item';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: ICartItem[]  = [];

  constructor() { }

  addProduct(productToAdd: IProduct, quantityToAdd: number): void {
    const item: ICartItem = {
      quantity: quantityToAdd,
      product: productToAdd
    };

    this.cart.push(item);
  }
}
