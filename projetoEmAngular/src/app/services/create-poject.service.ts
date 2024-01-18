import { Injectable } from '@angular/core';
import { Projeto, Transacao } from '../interfaces/iProjeto';

@Injectable({
  providedIn: 'root'
})
export class CreatePojectService {

  listaProjetos!: Projeto[];

  constructor() { }

  consultarProjetosLocalStorage(): boolean {
    return (!!localStorage.getItem('projetos'));
  }

  consultarOptionsLocalStorage(): boolean {
    return (!!localStorage.getItem('projetosSelect'));
  }

  criarProjetos(): Projeto[] {
    
    const primeirosOptions: string[] = ['Projeto 1', 'Projeto 2', 'Projeto 3'];
    localStorage.setItem('projetosSelect', JSON.stringify(primeirosOptions));
    const listaProjetos: Projeto[] = [];
    for (let i of primeirosOptions) {

      const nomePorjeto: Projeto = new Projeto(i, 0, [], []);
      listaProjetos.push(nomePorjeto);
    }
    localStorage.setItem('projetos', JSON.stringify(listaProjetos));
    this.listaProjetos = listaProjetos;
    return listaProjetos;
  }

  recuperarProjetos(): Projeto[] {
    const getprojetosLocalStorage: string = localStorage.getItem('projetos')!;
    const listaProjetosRecuperada: Projeto[] = JSON.parse(getprojetosLocalStorage);
    const listaProjetos: Projeto[] = listaProjetosRecuperada.map(dado => Projeto.criarApartirdaLocalStorage(dado));
    this.listaProjetos = listaProjetos;
    return listaProjetos;
  }

  buscarUltimoProjetoSelecionado(): string {
    if(!localStorage.getItem('ultimoProjeto')) {
      return 'Projeto 3';
    } else {
      return localStorage.getItem('ultimoProjeto')!;
    }    
  }

  retornarProjetoSelecionado(listaProjetos: Projeto[], projeto: string): Projeto {
    return (listaProjetos.find(objeto => objeto.nome == projeto)!);
  }

  mostarRenda(nomeProjeto: string): Transacao[] {
    const rendas: Transacao[] = this.listaProjetos.find(projeto => projeto.nome === nomeProjeto)!.renda;
    return rendas;
  }

  mostarDespesa(nomeProjeto: string): Transacao[] {
    const despesa: Transacao[] = this.listaProjetos.find(projeto => projeto.nome === nomeProjeto)!.despesa;
    return despesa;
  }
}
