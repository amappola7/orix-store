import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ScreenModeService } from 'src/app/services/screen-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  screenMode!: boolean;

  private _productsList: IProduct[] = [];
  get productsList(): IProduct[] {
    return this._productsList;
  }
  set productsList(products: IProduct[]) {
    this._productsList = products;
  }

  constructor(
    private productService: ProductService,
    private screenModeService: ScreenModeService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.screenMode = this.screenModeService.screenMode;
  }

  ngOnDestroy() {
  this.screenModeService.screenMode = this.screenMode;
  }

  getProducts(): void {
    console.log('FUnciona');
    this.productService.getProducts()
    .subscribe((data) => this.productsList = data)
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}
