import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MobileNavMenuComponent } from './components/mobile-nav-menu/mobile-nav-menu.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ShoppingCartComponent,
    MobileNavMenuComponent,
    AdminViewComponent,
    GenericModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
