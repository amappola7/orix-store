import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'log-in/:sm', component: LoginComponent}, //sm stands for screen mode (ligth or dark mode)
  {path: 'sign-up/:sm', component: SignupComponent},
  {path: 'shopping-cart/:sm', component: ShoppingCartComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
