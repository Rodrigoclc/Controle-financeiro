import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdicionarRendaComponent } from './pages/adicionar-renda/adicionar-renda.component';
import { AdicionarDespesaComponent } from './pages/adicionar-despesa/adicionar-despesa.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'adicionarrenda', component: AdicionarRendaComponent},
  {path: 'adicionardespesa', component: AdicionarDespesaComponent},
  {path: 'lista', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
