import { HttpClient } from '@angular/common/http';
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
  dataToken;
  constructor(private http:HttpClient) { }
  inCart = false;
  @Input() product: Product;

  
ngOnInit() {
  const headers = { 'Authorization': 'token', 'My-Custom-Header': 'foobar' }
  this.http.get<any>('https://http://tavana-node.herokuapp.com/goods', { headers }).subscribe(data => {
      this.dataToken = data.total;
  })
}

  data: any[]= [
    {
    name: 'Surface Laptop 4',
    info: 'i7 12 1Tb 4(1050 GTX)',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepwg-PvcpiLu5M-xEUgKF7wUlmQX28UjmL_iq8XctnLBNsQZOUwyB89Dpjrt5lrzUHZc&usqp=CAU.jpg',
    price: 'Price = 455$',
  },
  {
    name: 'Surface Laptop Book 3',
    info: 'i7 12 1Tb 4(1050 GTX)',
    imgSrc: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_brb/public/field/image/2020/10/surface-laptop-go-hero3-logo.jpg',
    price: 'Price = 455$',
  },
  {
    name: 'Laptop Acer l578',
    info: 'i7 12 1Tb 4(1050 GTX)',
    imgSrc: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large_wm_brb/public/field/image/2019/10/surface-laptop-3-13-review-cover-logo.jpg',
    price: 'Price = 455$',  
  },
  {
    name: 'Surface Laptop 4',
    info: 'i7 12 1Tb 4(1050 GTX)',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepwg-PvcpiLu5M-xEUgKF7wUlmQX28UjmL_iq8XctnLBNsQZOUwyB89Dpjrt5lrzUHZc&usqp=CAU.jpg',
    price: 'Price = 455$',  
  },  {
    name: 'Surface Pro 7',
    info: 'i7 12 1Tb 4(1050 GTX)',
    imgSrc: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large_wm_brb/public/field/image/2019/10/surface-laptop-3-13-review-cover-logo.jpg',
    price: 'Price = 455$',  
  },
  
  ];
    
}
