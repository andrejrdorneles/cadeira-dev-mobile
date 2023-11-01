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
import { BindingPageComponent } from './pages/binding-page/binding-page.component';
import { CustomUpercasePipe } from './pipe/custom-upercase.pipe';
import { ClientService } from './service/client.service';
import { Filho1PageComponent } from './pages/filho/filho1-page.component';
import { Filho2PageComponent } from './pages/filho/filho2-page.component';
import { PaiPageComponent } from './pages/pai/pai-page.component';
import { ClientListPage } from './pages/client-list/client-list.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { ClientDetailPage } from './pages/client-detail/client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent,
    CustomUpercasePipe,
    Filho1PageComponent,
    Filho2PageComponent,
    PaiPageComponent,
    ClientListPage,
    LoginPageComponent,
    ClientDetailPage
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
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
