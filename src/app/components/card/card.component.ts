import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() productInfo!: IProduct;
  @Input () inputScreenModeII!: boolean;
}
