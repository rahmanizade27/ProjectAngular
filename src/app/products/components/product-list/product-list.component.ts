import { Component, Input, OnInit } from '@angular/core';
export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  inCart = false;
  @Input() product: Product;
  ngOnInit(): void {
  }

}
