import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products-list/Product';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})

export class WishListComponent implements OnInit {

  wished$: Observable<Product[]>;
  
  constructor(private WishList: WishListService) { 
    this.wished$ = WishList.wished.asObservable();
  }

  ngOnInit(): void {
  }
  
  addToCart(product: Product):void{

  }

  removeOfWishList(product: Product):void{

  }

}
