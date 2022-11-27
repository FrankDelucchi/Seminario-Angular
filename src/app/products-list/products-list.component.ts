import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  product = {
    "name": "Zapas Nike",
    "descprition": "The best snickers in the world",
    "price": 80000,
    "image": "assets/images/Nike-Mamba.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
