import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ICartItem } from 'src/app/interfaces/icart-item';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  screenMode!: boolean;
  productInfo!: IProduct;
  cart: ICartItem[] = [];
  totalCart: number = 0;
  icons = {
    addProductIcon: faPlus,
    removeProductIcon: faMinus
  };
  quantity: number = 1;

  constructor (
    private cartService: CartService,
    private screenModeService: ScreenModeService,
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    console.log("CAMBIO EN EL COMPONENTE");
    this.cart = this.cartService.cart;
    this.screenMode = this.screenModeService.screenMode;
    this.getProduct();
  }

  getProduct() {
    const id: number = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
    .subscribe((product) => this.productInfo = product);
  }

  addQuantityToProduct(): void {
    this.quantity += 1;
  }

  removeQuantityToProduct(): void {
    if (this.quantity > 0 ) this.quantity -= 1;
  }

  openCartAlert(): void {
    this._snackBar.open('Product added to cart', '', {
      duration: 2500,
    });
  }

  addProductToCart(id: number): void {
    this.productService.getProductById(id)
    .subscribe((product) => {
      this.cartService.addProduct(product, this.quantity);
      this.openCartAlert();
    })
  };
  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}
