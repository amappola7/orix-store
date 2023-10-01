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

  // To - Do: Delete this objects after create forms to add and edit product
  productToEdit: IProduct = {
    id: 1,
    title: 'PRODUCTO EDITADO',
    price: 123,
    description: 'ESTA ES LA DESCRIPCIÓN DEL PRODUCTO EDITADO',
    category: 'QUESO',
    image: 'SOME IMAGE',
  }
  productToCreate: IProduct = {
    id: 100,
    title: 'Queso',
    price: 123,
    description: 'El queso es rico con pan y chocolate',
    category: 'food',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYGEVU9kNRFjCLwTE_IqCcZf8vRjrNJA808Dm24_OYA&s',
  }

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

  editProduct(id: number, productData: IProduct): void {
    this.productService.editProduct(id, productData)
    .subscribe((editedProduct) => {
      this.products = this.products.map((product) => product.id === editedProduct.id ? editedProduct : product);
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
    .subscribe((deletedProduct) => {
      this.products = this.products.filter((product) => product.id !== deletedProduct.id ? product : false);
    });
  }

  createProduct(productData: IProduct): void {
    this.productService.createProduct(productData)
    .subscribe((product) => this.products.push(product));
  }
}
