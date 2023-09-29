import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'log-in', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'admin-view', component: AdminViewComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
