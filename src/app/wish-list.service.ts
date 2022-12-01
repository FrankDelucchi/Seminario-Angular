import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/product';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio Angular para manejar logica de negocio del Ecommerce
 */
export class WishListService {
  
  private _wished: Product[] = [];

  wished: BehaviorSubject<Product[]> = new BehaviorSubject(this._wished);
  
  constructor() { }
  
  addToWishList(product: Product) {
    
    let item = this._wished.find((v1) => v1.name == product.name);
    if(!item){
      this._wished.push({ ... product });
    }
    this.wished.next(this._wished);
  } 
}
