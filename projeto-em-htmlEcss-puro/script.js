// variaveis dos elementos HTML
const listaProjetos = document.getElementById('lista-projetos');
const resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial');
const resultadoRenda = document.getElementById('resultadoRenda');
const resultadoDespesa = document.getElementById('resultadoDespesa');
const resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal');
// variaveis trazidas do localStorage
let ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'));
let projetosLocalStorage = JSON.parse(localStorage.getItem('projetos'));
// condição para criar ou mostrar projetos
let chave = 1;
if (projetosLocalStorage == null) {
    // projetos padrões
    const primeirosOptions = ['Projeto 1', 'Projeto 2', 'Projeto 3'];
    projetosLocalStorage = {};
    // loop para criar os projetos
    for (i in primeirosOptions) {
        // criando os options
        let option = new Option(primeirosOptions[i]);
        listaProjetos.appendChild(option);
        // criando os projetos com configurações padrões
        projetosLocalStorage[primeirosOptions[i]] = {};
        projetosLocalStorage[primeirosOptions[i]]['id'] = Number(i) + 1;
        projetosLocalStorage[primeirosOptions[i]]['saldoinicial'] = 0;
        projetosLocalStorage[primeirosOptions[i]]['despesa'] = {};
        projetosLocalStorage[primeirosOptions[i]]['despesa'][chave] = {};
        projetosLocalStorage[primeirosOptions[i]]['despesa'][chave]['valorDespesa'] = 0;
        projetosLocalStorage[primeirosOptions[i]]['renda'] = {};
        projetosLocalStorage[primeirosOptions[i]]['renda'][chave] = {};
        projetosLocalStorage[primeirosOptions[i]]['renda'][chave]['valorRenda'] = 0;
        localStorage.setItem('projetos', JSON.stringify(projetosLocalStorage));
    }
    listaProjetos.selectedIndex = 1
} else {
    // loop para mostrar os projetos existentes
    for (i in projetosLocalStorage) {        
        let option = new Option(i);
        listaProjetos.appendChild(option);
    }
}
// salvando a quantidade de projetos existentes
localStorage.setItem('TotalProjetos', listaProjetos.length);

let funçaoPrincipal = function() { 
    // verifica qual foi o projeto selecionado
    const opcaoSelecionada = (listaProjetos.selectedIndex);
    localStorage.setItem('nomeUltimoProjeto', listaProjetos.value);
    // salva qual projeto está selecionado
    localStorage.setItem('ultimoProjeto', opcaoSelecionada);
    ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'));
    // loop para resgatar renda, despesa e saldo inicial
    let despesaProjeto = 0;
    let rendaProjeto = 0;
    const chaveDoObjeto = Object.keys(projetosLocalStorage);
    if (chaveDoObjeto[ultimoProjetoSelecionado] === listaProjetos.value) {
        //console.log(projetosLocalStorage[listaProjetos.value])
        const todasAsDespesas = projetosLocalStorage[listaProjetos.value]['despesa'];
        for(i in todasAsDespesas) {
            despesaProjeto += todasAsDespesas[i].valorDespesa;
        }
        const todasAsRendas = projetosLocalStorage[listaProjetos.value]['renda'];
        for (i in todasAsRendas) {
            rendaProjeto += todasAsRendas[i].valorRenda;
        }
    }
    const saldoInicialProjeto = projetosLocalStorage[listaProjetos.value]['saldoinicial'];
    // somatoria do saldo final do projeto
    const resultadoFinalProjeto = (saldoInicialProjeto + rendaProjeto) - despesaProjeto;
    // mostra os valores dos projetos
    resultadoSaldoInicial.innerHTML = saldoInicialProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    resultadoRenda.innerHTML = rendaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    resultadoDespesa.innerHTML = despesaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    resultadoSaldoFinal.innerHTML = resultadoFinalProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

window.onload = function() {
    listaProjetos.selectedIndex = ultimoProjetoSelecionado;
    funçaoPrincipal();
}
listaProjetos.onchange = function() {
    funçaoPrincipal();
}
