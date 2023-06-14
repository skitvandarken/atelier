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
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { AuthInterceptor } from './intercetors/auth.interceptor';
import { MainComponent } from './dashboard/main/main.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { ProdutosComponent } from './produtos/produtos.component';

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
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
