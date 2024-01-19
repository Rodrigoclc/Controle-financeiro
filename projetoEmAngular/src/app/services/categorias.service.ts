import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasRenda!: string[];
  categoriasDespesa!: string[];

  constructor() { }

  consultarCategoriRendaLocalStorage(): boolean {
    if(!localStorage.getItem('categoriasRenda')) {
      return false;
    } else {
      return true;
    }
  }

  consultarCategoriDespesaLocalStorage(): boolean {
    if(!localStorage.getItem('categoriasDespesa')) {
      return false;
    } else {
      return true;
    }
  }

  buscarCategoriasRenda(): string[] {
    if(!localStorage.getItem('categoriasRenda')) {
      const categorias: string[] = ['Salario', 'Comissão', 'Vendas'];
      localStorage.setItem('categoriasRenda', JSON.stringify(categorias));
      return categorias;
    } else {
      const categorias: string[] = JSON.parse(localStorage.getItem('categoriasRenda')!);
      return categorias;
    }
  }

  buscarCategoriasDespesa(): string[] {
    if(!localStorage.getItem('categoriasDespesa')) {
      const categorias: string[] = ['Mercado', 'Restaurante', 'Contas'];
      localStorage.setItem('categoriasDespesa', JSON.stringify(categorias));
      return categorias;
    } else {
      const categorias: string[] = JSON.parse(localStorage.getItem('categoriasDespesa')!);
      return categorias;
    }
  }
}
