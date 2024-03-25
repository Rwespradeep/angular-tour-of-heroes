import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CurrencyConvertorPipe} from "../../currency-convertor.pipe"

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, CommonModule, CurrencyConvertorPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(){}

  @Input()
  product!: Product;

  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product);
  }

}
