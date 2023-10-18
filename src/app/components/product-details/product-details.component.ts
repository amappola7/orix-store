import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  screenMode!: boolean;
  product!: IProduct;

  constructor (
    private screenModeService: ScreenModeService,
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.screenMode = this.screenModeService.screenMode;
    this.getProduct();
  }

  getProduct() {
    const id: number = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
    .subscribe((product) => this.product = product);
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}
