import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent {
  productsList: IProduct[] = [];

  @Input() currentProduct!: IProduct;
  @Input() screenMode!: boolean;

  constructor(
    private productService: ProductService
  ) {}

  ngOnChanges() {
    this.productService.getProducts()
    .subscribe((products) => {
      this.productsList = products.filter((product) => product.category === this.currentProduct.category && product.id !== this.currentProduct.id);
    })
  }
}