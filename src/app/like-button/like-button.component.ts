import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products-list/product';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {

  
  constructor(private wished: WishListService) { }

  @Input()
  product!: Product;
  
  ngOnInit(): void {
    
  }

  addToWishList(product: Product): void{
    this.wished.addToWishList(product)
    this.product.liked = true;
    this.product.like = false;
  }

}
  

