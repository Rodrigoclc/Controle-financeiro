import { Component, OnInit } from '@angular/core';
import { Projeto, Transacao } from 'src/app/interfaces/iProjeto';
import { CreatePojectService } from 'src/app/services/create-poject.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  seletor: string[] = ['Todos', 'Rendas', 'Despesas'];
  projetoSelecionado: string = localStorage.getItem('ultimoProjeto')!;
  rendas!: Transacao[];
  despesa!: Transacao[];

  constructor(private serviceProjetos: CreatePojectService) {
    
  }

  ngOnInit(): void {
    this.rendas = this.serviceProjetos.mostarRenda(this.projetoSelecionado);
    this.despesa = this.serviceProjetos.mostarDespesa(this.projetoSelecionado);
    // console.log(Projeto.mostrarTransacoes())
  }

}
