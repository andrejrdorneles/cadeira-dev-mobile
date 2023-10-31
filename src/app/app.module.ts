import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ComponentModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserListModule } from './pages/user-list/user-list.module';
import { UserListRoutingModule } from './pages/user-list/user-list.routing.module';
import { ProductListModule } from './pages/product-list/product-list.module';
import { ProductListRoutingModule } from './pages/product-list/product-list.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    FormsModule,
    AppRoutingModule,
    UserListModule,
    UserListRoutingModule,
    ProductListModule,
    ProductListRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
