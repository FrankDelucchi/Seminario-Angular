import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';
import { Product } from './product'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products : Product [] = [
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
  
  constructor(private wished: WishListService) { 
  }

  ngOnInit(): void {
  }

  addToWishList(product: Product): void{
    this.wished.addToWishList(product)
  }

}
