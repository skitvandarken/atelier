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


const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'pedido', component: PedidoComponent },
{ path: 'coleccoes', component: ColeccoesComponent  },
{ path: 'footer', component: FooterComponent },
{ path: 'navbar', component: NavbarComponent },
{ path:'checkout', component: CheckoutComponent },
{ path:'navmenu', component: NavmenuComponent },
{ path:'login', component: LoginComponent },
{ path:'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
