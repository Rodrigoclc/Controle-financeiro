import { Injectable } from '@angular/core';
import { Projeto, Transacao } from '../interfaces/iProjeto';

@Injectable({
  providedIn: 'root'
})
export class CreatePojectService {

  listaProjetos!: Projeto[];
  options: string[] = ['Projeto 1', 'Projeto 2', 'Projeto 3'];

  constructor() { }

  consultarProjetosLocalStorage(): boolean {
    return (!!localStorage.getItem('projetos'));
  }

  consultarOptionsLocalStorage(): boolean {
    return (!!localStorage.getItem('projetosSelect'));
  }

  criarProjetosDefault(): Projeto[] {
    
    
    localStorage.setItem('projetosSelect', JSON.stringify(this.options));
    const listaProjetos: Projeto[] = [];
    for (let i of this.options) {

      const nomePorjeto: Projeto = new Projeto(i, 0, [], []);
      listaProjetos.push(nomePorjeto);
    }
    localStorage.setItem('projetos', JSON.stringify(listaProjetos));
    localStorage.setItem('ultimoProjeto', 'Projeto 1');
    this.listaProjetos = listaProjetos;
    return listaProjetos;
  }

  criarNovosProjetos(nomeProjeto: string, saldoInicial: number) {
    const projeto: Projeto = new Projeto(nomeProjeto, saldoInicial, [], []);
    this.listaProjetos.push(projeto);
    this.options.push(nomeProjeto);
    localStorage.setItem('projetos', JSON.stringify(this.listaProjetos));
    localStorage.setItem('projetosSelect', JSON.stringify(this.options));
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

  mostrarTransacoes(nomeProjeto: string): Transacao[] {
    const transacoes: Transacao[] = [];
    this.listaProjetos.find(projeto => projeto.nome === nomeProjeto)!.despesa.forEach(i => {
      transacoes.push(i);
    })

    this.listaProjetos.find(projeto => projeto.nome === nomeProjeto)!.renda.forEach(i => {
      transacoes.push(i);
    })
    return transacoes;
  }

  excluirProjeto(nomeProjeto: string): void {
    const indexProjeto = this.listaProjetos.findIndex(projeto => projeto.nome === nomeProjeto)!;
    this.listaProjetos.splice(indexProjeto, 1);
    localStorage.setItem('projetos', JSON.stringify(this.listaProjetos));
    const indexOption = (this.options.findIndex(i => i === nomeProjeto));
    this.options.splice(indexOption, 1);
    localStorage.setItem('projetosSelect', JSON.stringify(this.options));
  }

  atualizarProjeto(nomeProjeto: string, nomeEditado: string, saldoEditado: number) {
    const projeto = this.listaProjetos.find(projeto => projeto.nome === nomeProjeto)!;
    projeto.nome = nomeEditado;
    projeto.saldoInicial = saldoEditado;
  }
}
