import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColeccoesComponent } from './coleccoes/coleccoes.component';
import { PedidoComponent } from './pedido/pedido.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardtopComponent } from './dashboard/layout/dashboardtop/dashboardtop.component';
import { DashboardsideComponent } from './dashboard/layout/dashboardside/dashboardside.component';
import { MainComponent } from './dashboard/main/main.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { ProductsComponent } from './dashboard/product/products/products.component';
import { CategoryComponent } from './dashboard/product/category/category.component';
import { StaffsComponent } from './dashboard/staff/staffs/staffs.component';
import { CreateproductsComponent } from './dashboard/product/createproducts/createproducts.component';
import { CreatestaffsComponent } from './dashboard/staff/createstaffs/createstaffs.component';
import { CreatecollectionsComponent } from './dashboard/collection/createcollections/createcollections.component';
import { CollectionsComponent } from './dashboard/collection/collections/collections.component';
import { PendingordersComponent } from './dashboard/order/pendingorders/pendingorders.component';
import { OrdersdeliveredComponent } from './dashboard/order/ordersdelivered/ordersdelivered.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ColeccoesComponent,
    PedidoComponent,
    NavbarComponent,
    FooterComponent,
    CheckoutComponent,
    TopbarComponent,
    NavmenuComponent,
    LoginComponent,
    RegisterComponent,
    DashboardtopComponent,
    DashboardsideComponent,
    MainComponent,
    SettingsComponent,
    ClientsComponent,
    ProductsComponent,
    CategoryComponent,
    StaffsComponent,
    CreateproductsComponent,
    CreatestaffsComponent,
    CreatecollectionsComponent,
    CollectionsComponent,
    PendingordersComponent,
    OrdersdeliveredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
