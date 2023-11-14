var listaProjetos = document.getElementById('lista-projetos')
var resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial')
var resultadoRenda = document.getElementById('resultadoRenda')
var resultadoDespesa = document.getElementById('resultadoDespesa')
var resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal')

var ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'))
var listaObjetos = {}
listaObjetos = JSON.parse(localStorage.getItem('projetos'))

var saldoInicialProjeto = 0

var buscarObjetoPorNome = function(listaObjetos) {
    
    var res = null
    console.log(listaObjetos[i])
    for (var i in listaObjetos) {

        if (listaObjetos[i].id === id) {
            res = listaObjetos[i]
            break
        }
    }
    return res
}

console.log(buscarObjetoPorNome())

localStorage.setItem('TotalProjetos', listaProjetos.length)

// tentativa de adicionar options
for (var i in listaProjetos) {
    //console.log(listaProjetos.options[i].text)
    if (listaProjetos.options[i].text != listaObjetos) {
        var option = new Option(listaObjetos);
        listaProjetos.appendChild(option);
        
        break;
    } 
}

var funçaoPrincipal = function() { 

    const opcaoSelecionada = listaProjetos.value

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
