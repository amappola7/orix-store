import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ScreenModeService } from 'src/app/services/screen-mode.service';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {
  screenMode!: boolean;
  products: IProduct[] = [];
  icons = {
    editIcon: faPencil,
    deleteIcon: faTrash
  };
  screenSize: number = window.screen.width;

  constructor(
    private screenModeService: ScreenModeService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.screenMode = this.screenModeService.screenMode;
    this.productService.getProducts()
    .subscribe((products) => this.products = products);
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }
}
