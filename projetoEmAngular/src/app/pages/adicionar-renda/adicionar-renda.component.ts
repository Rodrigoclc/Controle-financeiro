import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto, Transacao } from 'src/app/interfaces/iProjeto';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CreatePojectService } from 'src/app/services/create-poject.service';

@Component({
  selector: 'app-adicionar-renda',
  templateUrl: './adicionar-renda.component.html',
  styleUrls: ['./adicionar-renda.component.css']
})
export class AdicionarRendaComponent implements OnInit {

  listaProjetos!: Projeto[];
  ultimoProjeto!: string;
  listaCategorias!: string[];

  tituloHeader: string = 'Adicionar renda';

  constructor(
    private activeRoute: ActivatedRoute, 
    private projetoSevice: CreatePojectService,
    private categorias: CategoriasService) {
      
      // this.activeRoute.params.subscribe(
      //   res => console.log(res)
      // )
  }

  ngOnInit(): void {
    this.ultimoProjeto = this.projetoSevice.buscarUltimoProjetoSelecionado();
    this.listaProjetos = this.projetoSevice.recuperarProjetos();
    this.listaCategorias = this.categorias.buscarCategoriasRenda();
  }

  receberDados(dados: Transacao) {
    console.log(this.listaProjetos.find(objeto => objeto.nome == this.ultimoProjeto)!.adicionarRenda(dados));
    localStorage.setItem('projetos', JSON.stringify(this.listaProjetos));
  }

}
