import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColeccoesComponent } from './coleccoes/coleccoes.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './dashboard/main/main.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { ProductsComponent } from './dashboard/product/products/products.component';
import { StaffsComponent } from './dashboard/staff/staffs/staffs.component';
import { CreateproductsComponent } from './dashboard/product/createproducts/createproducts.component';
import { CreatestaffsComponent } from './dashboard/staff/createstaffs/createstaffs.component';
import { CollectionsComponent } from './dashboard/collection/collections/collections.component';
import { CreatecollectionsComponent } from './dashboard/collection/createcollections/createcollections.component';
import { CategoryComponent } from './dashboard/product/category/category.component';
import { PendingordersComponent } from './dashboard/order/pendingorders/pendingorders.component';
import { OrdersdeliveredComponent } from './dashboard/order/ordersdelivered/ordersdelivered.component';



const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'pedido', component: PedidoComponent },
{ path: 'coleccoes', component: ColeccoesComponent  },
{ path: 'footer', component: FooterComponent },
{ path: 'navbar', component: NavbarComponent },
{ path:'checkout', component: CheckoutComponent },
{ path:'navmenu', component: NavmenuComponent },
{ path:'login', component: LoginComponent },
{ path:'register', component: RegisterComponent },
{ path:'dashboard', component: MainComponent },
{ path:'dashboard/clients', component: ClientsComponent },
{ path:'dashboard/collections', component: CollectionsComponent },
{ path:'dashboard/collections/create', component: CreatecollectionsComponent },
{ path:'dashboard/settings', component: SettingsComponent },
{ path:'dashboard/staffs', component: StaffsComponent },
{ path:'dashboard/staffs/create', component: CreatestaffsComponent },
{ path:'dashboard/products', component: ProductsComponent },
{ path:'dashboard/products/create', component: CreateproductsComponent },
{ path:'dashboard/categories', component: CategoryComponent },
{ path:'dashboard/orders/pedings', component: PendingordersComponent },
{ path:'dashboard/orders/delivered', component: OrdersdeliveredComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
