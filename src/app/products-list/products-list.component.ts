import { Component, OnInit } from '@angular/core';
import { Product } from './product'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  /**
   * Mock de items del Ecommerce
   */
  products : Product [] = [
    {
      name: "Zapas Nike Kobe",
      description: "The best snickers in the world",
      price: 80000,
      image: "../../assets/images/Nike-Mamba.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Zapas Lillard",
      description: "The best snickers in the world",
      price: 80000,
      image: "assets/images/adidas-dame-8.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Zapas Nike Irving",
      description: "The best snickers in the world",
      price: 80000,
      image: "assets/images/kyrie7.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Zapas Nike Lebron",
      description: "The best snickers in the world",
      price: 80000,
      image: "assets/images/lebron-witness-5.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Larry Bird Jersey",
      description: "Feel in the skin of the greatest stars",
      price: 50000,
      image: "assets/images/bird-jersey.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Facundo Campazo Denver Nuggets N°7",
      description: "Feel in the skin of the greatest stars",
      price: 50000,
      image: "assets/images/campazo-jersey.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Boston shorts",
      description: "Provides the best confort for your play",
      price: 30000,
      image: "assets/images/boston-short.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Chicago shorts",
      description: "Provides the best confort for your play",
      price: 30000,
      image: "assets/images/chicago-short.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Jordan Hoodie",
      description: "WARM YOU UP!!",
      price: 70000,
      image: "assets/images/buzo-jordan.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Hoodie Kobe Bryant",
      description: "WARM YOU UP!!",
      price: 70000,
      image: "assets/images/mamba-hoodie.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Pelota Molten Outdoor",
      description: "Bounce your life",
      price: 10000,
      image: "assets/images/molten-outdoor.jpg",
      liked: false,
      like: true,
    },
    {
      name: "Pelota Spalding Cuero",
      description: "Bounce your life",
      price: 10000,
      image: "assets/images/spalding-tf.jpg",
      liked: false,
      like: true,
    },
  ]
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
