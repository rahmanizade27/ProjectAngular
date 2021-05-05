import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [{'image': 'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_1280.jpg'},
  {'image': 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377_1280.jpg'},
  {'image': 'https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png'},
  {'image': 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg'}, 
  {'image': 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg'}, 
  {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
