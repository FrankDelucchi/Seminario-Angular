import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { WishListComponent } from './wish-list/wish-list.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'products',
    pathMatch: 'full' 
  },
  {
    path: 'products', 
    component: ProductsListComponent
  },
  {
    path: 'favs',
    component: WishListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
