import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-add-or-edit-product-form',
  templateUrl: './add-or-edit-product-form.component.html',
  styleUrls: ['./add-or-edit-product-form.component.scss']
})
export class AddOrEditProductFormComponent {
  @Input() formAction!: string;
  @Input() formValues!: IProduct;
  @Output() formResult = new EventEmitter<any>();

  productForm = new FormGroup({
    productName: new FormControl(this.formValues.title),
    productPrice: new FormControl(this.formValues.price),
    productDescription: new FormControl(this.formValues.description),
    productCategory: new FormControl(this.formValues.category),
    productImage: new FormControl(this.formValues.image),
  });

  onSubmit(): void {
    this.formResult.emit(this.productForm.value);
  }

};
