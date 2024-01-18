import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdicionarRendaComponent } from './pages/adicionar-renda/adicionar-renda.component';
import { AdicionarDespesaComponent } from './pages/adicionar-despesa/adicionar-despesa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaComponent } from './pages/lista/lista.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarRendaComponent,
    AdicionarDespesaComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
