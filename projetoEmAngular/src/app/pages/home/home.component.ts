import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/interfaces/iProjeto';
import { CreatePojectService } from 'src/app/services/create-poject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // exite um erro quando o projeto é carregado pela primeira vez pois ainda não existe options
  primeirosOptions: string[] | undefined;
  opcaoSelecionada!: string;
  saldoInicial!: number;
  renda!: number;
  despesa!: number;
  saldoFinal!: number;

  listaProjetos!: Projeto[];


  constructor(private homeService: CreatePojectService) { }

  ngOnInit(): void {

    this.carregarProjetos(this.homeService.consultarProjetosLocalStorage())
    this.primeirosOptions  = ((localStorage.getItem('projetosSelect'))?.slice(2, -2))?.split('","');
    this.opcaoSelecionada = this.homeService.buscarUltimoProjetoSelecionado();
    this.mostrarResultados();
  }

  carregarProjetos(teste: boolean): void {
    if(teste === false) {
      this.listaProjetos = this.homeService.criarProjetos();
    } else {
      this.listaProjetos = this.homeService.recuperarProjetos();
    }
  }

  salvarProjetoSelecionado() {
    localStorage.setItem('ultimoProjeto', this.opcaoSelecionada);
  }

  mostrarResultados() {
    console.log(this.listaProjetos)
    const projeto = (this.listaProjetos.find(objeto => objeto.nome == this.opcaoSelecionada));
    this.saldoInicial = (projeto!.mostrarSaldoinicial());
    this.renda = (projeto!.mostrarTotalRenda());
    this.despesa = (projeto!.mostrarTotalDespesa());
    this.saldoFinal = (projeto!.calcularSaldoAtual());
  }
}
