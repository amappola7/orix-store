import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-or-edit-product-form',
  templateUrl: './add-or-edit-product-form.component.html',
  styleUrls: ['./add-or-edit-product-form.component.scss']
})
export class AddOrEditProductFormComponent {
  productForm = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(0),
    productDescription: new FormControl(''),
    productCategory: new FormControl(''),
    productImage: new FormControl(''),
  });
  productCategoriesList: string[] = [];

  @Input() formAction!: string;
  @Input() formValues!: IProduct;
  @Output() formResult = new EventEmitter<any>();

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getCategories()
    .subscribe((data) => this.productCategoriesList = data);

    if(this.formAction === 'edit') {
      this.fillingForm();
    }
  }


  onSubmit(): void {
    const emission = {
      productFormValue: this.productForm.value,
      productId: this.formValues.id
    }
    this.formResult.emit(emission);
  }

  fillingForm(): void {
    this.productForm.patchValue({
      productName: this.formValues.title,
      productPrice: this.formValues.price,
      productDescription: this.formValues.description,
      productCategory: this.formValues.category,
      productImage: this.formValues.image,
    });
  }
};
