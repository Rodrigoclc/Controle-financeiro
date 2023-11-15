var listaProjetos = document.getElementById('lista-projetos')
var resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial')
var resultadoRenda = document.getElementById('resultadoRenda')
var resultadoDespesa = document.getElementById('resultadoDespesa')
var resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal')

var ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'))
var projetosLocalStorage = JSON.parse(localStorage.getItem('projetos'))

var saldoInicialProjeto = 0
var primeirosOptions = ['Projeto 1', 'Projeto 2', 'Projeto 3']

if (projetosLocalStorage == null) {
    var listaObjetos = {}
    for (var i in primeirosOptions) {
        
        var option = new Option(primeirosOptions[i])
        listaProjetos.appendChild(option)
        
        if (listaObjetos != null) {
            console.log(listaObjetos)
        }
        
        listaObjetos[primeirosOptions[i]] = {}
        listaObjetos[primeirosOptions[i]]['id'] = i
        listaObjetos[primeirosOptions[i]]['saldoinicial'] = 0
        localStorage.setItem('projetos', JSON.stringify(listaObjetos))
    }
} else {
    console.log(projetosLocalStorage.casa.id)
    for (var i in projetosLocalStorage) {
        
        var a = projetosLocalStorage[i]
        
        var option = new Option(i)
        listaProjetos.appendChild(option)
    }
}

localStorage.setItem('TotalProjetos', listaProjetos.length)

var funçaoPrincipal = function() { 

    const opcaoSelecionada = listaProjetos.selectedIndex
    
    localStorage.setItem('ultimoProjeto', opcaoSelecionada)
    
    var rendaProjeto = Number(localStorage.getItem(`renda${opcaoSelecionada}`))
    var despesaProjeto = Number(localStorage.getItem(`despesa${opcaoSelecionada}`))
    var resultadoFinalProjeto = rendaProjeto - despesaProjeto

    resultadoSaldoInicial.innerHTML = saldoInicialProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoRenda.innerHTML = rendaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoDespesa.innerHTML = despesaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoSaldoFinal.innerHTML = resultadoFinalProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

var ultimoProjetoSelecionadofunction = function() {
    for (var i = 0; i < listaProjetos.options.length; i++) {
        if (Number(listaProjetos.options[i].value) === ultimoProjetoSelecionado) {
            listaProjetos.selectedIndex = i            
            break            
        } 
    }  
    return (listaProjetos.selectedIndex = i)   
}

window.onload = function() {
    ultimoProjetoSelecionadofunction()
    funçaoPrincipal()   
}
listaProjetos.onchange = function() {
    funçaoPrincipal()
} 
