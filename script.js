// variaveis dos elementos HTML
var listaProjetos = document.getElementById('lista-projetos')
var resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial')
var resultadoRenda = document.getElementById('resultadoRenda')
var resultadoDespesa = document.getElementById('resultadoDespesa')
var resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal')
// variaveis trazidas do localStorage
var ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'))
var projetosLocalStorage = JSON.parse(localStorage.getItem('projetos'))
// condição para criar ou mostrar projetos
var chave = 1
if (projetosLocalStorage == null) {
    // projetos padrões
    var primeirosOptions = ['Projeto 1', 'Projeto 2', 'Projeto 3']
    var listaObjetos = {}
    // loop para criar os projetos
    for (var i in primeirosOptions) {
        // criando os options
        var option = new Option(primeirosOptions[i])
        listaProjetos.appendChild(option)        
        // criando os projetos com configurações padrões
        listaObjetos[primeirosOptions[i]] = {}
        listaObjetos[primeirosOptions[i]]['id'] = Number(i) + 1
        listaObjetos[primeirosOptions[i]]['saldoinicial'] = 0
        listaObjetos[primeirosOptions[i]]['despesa'] = {}
        listaObjetos[primeirosOptions[i]]['despesa'][chave] = {}
        listaObjetos[primeirosOptions[i]]['despesa'][chave]['valorDespesa'] = 0
        listaObjetos[primeirosOptions[i]]['renda'] = {}
        listaObjetos[primeirosOptions[i]]['renda'][chave] = {}
        listaObjetos[primeirosOptions[i]]['renda'][chave]['valorRenda'] = 0
        localStorage.setItem('projetos', JSON.stringify(listaObjetos))
    }
} else {
    // loop para mostrar os projetos existentes
    for (var i in projetosLocalStorage) {        
        var option = new Option(i)
        listaProjetos.appendChild(option)
    }
}
// salvando a quantidade de projetos existentes
localStorage.setItem('TotalProjetos', listaProjetos.length)

var funçaoPrincipal = function() { 
    // verifica qual foi o projeto selecionado
    const opcaoSelecionada = (listaProjetos.selectedIndex)
    console.log(listaProjetos.value)
    localStorage.setItem('nomeUltimoProjeto', listaProjetos.value)
    // salva qual projeto está selecionado
    localStorage.setItem('ultimoProjeto', opcaoSelecionada)
    ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'))
    // loop para resgatar renda, despesa e saldo inicial
    var despesaProjeto = 0
    var rendaProjeto = 0
    let chaveDoObjeto = Object.keys(projetosLocalStorage);
    if (chaveDoObjeto[ultimoProjetoSelecionado] === listaProjetos.value) {
        //console.log(projetosLocalStorage[listaProjetos.value])
        var todasAsDespesas = projetosLocalStorage[listaProjetos.value]['despesa']
        for(i in todasAsDespesas) {
            despesaProjeto += todasAsDespesas[i].valorDespesa;
        }
        var todasAsRendas = projetosLocalStorage[listaProjetos.value]['renda']
        for (i in todasAsRendas) {
            rendaProjeto += todasAsRendas[i].valorRenda;
        }
    }
    var saldoInicialProjeto = projetosLocalStorage[listaProjetos.value]['saldoinicial'];
    // somatoria do saldo final do projeto
    var resultadoFinalProjeto = (saldoInicialProjeto + rendaProjeto) - despesaProjeto
    // mostra os valores dos projetos
    resultadoSaldoInicial.innerHTML = saldoInicialProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoRenda.innerHTML = rendaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoDespesa.innerHTML = despesaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoSaldoFinal.innerHTML = resultadoFinalProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

window.onload = function() {
    listaProjetos.selectedIndex = ultimoProjetoSelecionado
    funçaoPrincipal()   
}
listaProjetos.onchange = function() {
    funçaoPrincipal()
}
