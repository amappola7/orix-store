import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/pages/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShoppingCartComponent } from './ui/pages/shopping-cart/shopping-cart.component';
import { AdminViewComponent } from './ui/pages/admin-view/admin-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'log-in', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'admin-view', component: AdminViewComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
