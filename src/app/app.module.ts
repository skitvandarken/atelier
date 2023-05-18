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
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
