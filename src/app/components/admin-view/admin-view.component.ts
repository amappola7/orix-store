import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ScreenModeService } from 'src/app/services/screen-mode.service';
import { faPencil, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {
  products: IProduct[] = [];
  showProductFormModal: boolean = false;
  inputFormAction!: string;
  inputFormDefaultValues: IProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };
  screenMode!: boolean;
  icons = {
    editIcon: faPencil,
    deleteIcon: faTrash,
    exitIcon: faXmark
  };
  screenSize: number = window.screen.width;
  loginStatus!: boolean;

  constructor(
    private screenModeService: ScreenModeService,
    private productService: ProductService,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginStatus = this.loginService.loginStatus;
    this.screenMode = this.screenModeService.screenMode;
    this.productService.getProducts()
    .subscribe((products) => this.products = products);
  }

  setScreenMode(mode: boolean): void {
    this.screenMode = mode;
  }

  onShowProductFormModal(action: string, defaultValues: IProduct = this.inputFormDefaultValues): void {
    this.inputFormAction = action;
    this.inputFormDefaultValues = defaultValues;
    this.showProductFormModal = !this.showProductFormModal;
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
      this._snackBar.open('Product deleted', '', {
        duration: 2500,
      });
    });
  }

  createProduct(productData: IProduct): void {
    this.productService.createProduct(productData)
    .subscribe((product) => this.products.push(product));
  }

  onSubmitProductForm(emission: any): void {
    const productData: IProduct = {
      id: emission.productId,
      title: emission.productFormValue.productName,
      price: emission.productFormValue.productPrice,
      description: emission.productFormValue.productDescription,
      category: emission.productFormValue.productCategory,
      image: emission.productFormValue.productImage
    }

    if(this.inputFormAction === 'add') {
      this.createProduct(productData);
      this._snackBar.open('Product created', '', {
        duration: 2500,
      });
    } else {
      this.editProduct(productData.id, productData);
      this._snackBar.open('Product edited', '', {
        duration: 2500,
      });
    }

    this.showProductFormModal = !this.showProductFormModal;
  }
}
