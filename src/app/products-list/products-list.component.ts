import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products : product [] = [
    {
      name: "Zapas Nike Kobe",
      description: "The best snickers in the world",
      price: 80000,
      image: "assets/images/Nike-Mamba.jpg"
    },
    {
      name: "Zapas Lillard",
      description: "The best snickers in the world",
      price: 80000,
      image: "assets/images/adidas-dame-8.jpg"
    },
    {
      name: "Zapas Nike Irving",
      description: "The best snickers in the world",
      price: 80000,
      image: "assets/images/kyrie7.jpg"
    },
    {
      name: "Zapas Nike Lebron",
      description: "The best snickers in the world",
      price: 80000,
      image: "assets/images/lebron-witness-5.jpg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
