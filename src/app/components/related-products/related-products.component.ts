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

  @Input() productCategory!: string;
  @Input() screenMode!: boolean;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts()
    .subscribe((products) => {
      this.productsList = products.filter((product) => product.category === this.productCategory);
    })
  }
}