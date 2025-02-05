import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductComponent } from '../components/product/product.component';
import { Product, Products } from '../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private productsService: ProductsService) { }

  products: Product[] = [];
  totatRecords: number = 0;
  rows: number = 5;
  onProductOutput(product:Product) {
    console.log(product, "output");
  }

  onPageChange(event:any) {
    this.fetchProducts(event.page, event.rows)
  }
  
  ngOnInit(){
    this.fetchProducts(0, this.rows);
  }

  fetchProducts(page:number, perPage:number) {
    this.productsService.getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products: Products) => {
        this.products = products.items;
        this.totatRecords = products.total;
      })
  }

  
}
