import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto, Transacao } from 'src/app/interfaces/iProjeto';
import { CreatePojectService } from 'src/app/services/create-poject.service';

@Component({
  selector: 'app-adicionar-renda',
  templateUrl: './adicionar-renda.component.html',
  styleUrls: ['./adicionar-renda.component.css']
})
export class AdicionarRendaComponent implements OnInit {

  listaProjetos!: Projeto[];
  ultimoProjeto!: string;

  tituloHeader: string = 'Adicionar renda';

  constructor(
    private activeRoute: ActivatedRoute, 
    private projetoSevice: CreatePojectService) {
      this.ultimoProjeto = projetoSevice.buscarUltimoProjetoSelecionado()
      this.listaProjetos = projetoSevice.recuperarProjetos();
      // this.activeRoute.params.subscribe(
      //   res => console.log(res)
      // )
  }

  ngOnInit(): void {
  }

  receberDados(dados: Transacao) {
    console.log(this.listaProjetos.find(objeto => objeto.nome == this.ultimoProjeto)!.adicionarRenda(dados));
    localStorage.setItem('projetos', JSON.stringify(this.listaProjetos));
  }

}
