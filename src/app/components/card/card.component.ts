import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  selectedProduct!: IProduct;
  @Input() productInfo!: IProduct;
  @Input () inputScreenModeII!: boolean;

  constructor(
    private productService: ProductService
  ){}

  addProductToCart(id: number): void {
    this.productService.getProductById(id)
    .subscribe((product) => this.selectedProduct = product);
  }
}
