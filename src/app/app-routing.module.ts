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
import { CollectionComponent } from './dashboard/collection/collection.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { StaffsComponent } from './dashboard/staffs/staffs.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'pedido', component: PedidoComponent },
{ path: 'coleccoes', component: ColeccoesComponent  },
{ path: 'footer', component: FooterComponent },
{ path: 'navbar', component: NavbarComponent },
{ path:'checkout/:name', component: CheckoutComponent },
{ path:'navmenu', component: NavmenuComponent },
{ path:'login', component: LoginComponent },
{ path:'register', component: RegisterComponent },
{ path:'dashboard', component: MainComponent },
{ path:'dashboard/collection', component: CollectionComponent },
{ path:'dashboard/clients', component: ClientsComponent },
{ path:'dashboard/settings', component: SettingsComponent },
{ path:'dashboard/staffs', component: StaffsComponent },
{path: 'produtos', component:ProdutosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
