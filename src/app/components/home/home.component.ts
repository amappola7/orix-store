import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ScreenModeService } from 'src/app/services/screen-mode.service';
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  screenMode!: boolean;
  screenSize: number = window.screen.width;
  icons = {
    searchIcon: faMagnifyingGlass,
    filterIcon: faFilter
  };

  private _productsList: IProduct[] = [];
  get productsList(): IProduct[] {
    return this._productsList;
  };
  set productsList(products: IProduct[]) {
    this._productsList = products;
  };

  private _categoriesList: string[] = [];
  get categoriesList(): string[] {
    return this._categoriesList;
  }
  set categoriesList(categories: string[]) {
    this._categoriesList = categories;
  }

  selectedCategory!: string;
  searchingName!: string;

  constructor(
    private productService: ProductService,
    private screenModeService: ScreenModeService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.screenMode = this.screenModeService.screenMode;
  }

  ngOnDestroy() {
    this.screenModeService.screenMode = this.screenMode;
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((data) => this.productsList = data);
  }

  getCategories(): void {
    this.productService.getCategories()
      .subscribe((data) => this.categoriesList = data);
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }

  searchByName(name: string): void {
    this.productService.getProducts()
      .subscribe((data) => this.productsList = data.filter((product) => product.title.toLowerCase().includes(name.toLowerCase())));
  }

  filterByCategory(category: string): void {
    this.productService.getProducts()
      .subscribe((data) => this.productsList = data.filter((product) => category === 'products' ? product : product.category === category));
  }
}
