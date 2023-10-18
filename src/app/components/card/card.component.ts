import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { faShoppingCart, faInfo } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  icons = {
    shoppingCartIcon: faShoppingCart,
    moreInfoIcon: faInfo
  };
  selectedProduct!: IProduct;
  @Input() productInfo!: IProduct;
  @Input () inputScreenModeII!: boolean;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private _snackBar: MatSnackBar,
    private router: Router
  ){}

  openCartAlert(): void {
    this._snackBar.open('Product added to cart', '', {
      duration: 2500,
    });
  }

  addProductToCart(id: number): void {
    this.productService.getProductById(id)
    .subscribe((product) => {
      this.cartService.addProduct(product);
      this.openCartAlert();
    })
  };

  navigateToDetails(): void {
    this.router.navigateByUrl(`product-details/${this.productInfo.id}`);
  }
}
