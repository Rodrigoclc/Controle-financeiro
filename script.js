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

    for (i in projetosLocalStorage) {
        var projetos = projetosLocalStorage[i]
        console.log(ultimoProjetoSelecionado)
        if (projetos.id == ultimoProjetoSelecionado) {
            //console.log(projetos.id)
            var saldoInicialProjeto = projetos.saldoinicial
            //console.log(saldoInicialProjeto)
            for (o in projetos) {
                //console.log(o)
                var projetoSelecionado = projetos[o]               
                
                if (projetoSelecionado.valorRenda) {
                    var rendaProjeto = projetoSelecionado.valorRenda
                    //console.log(rendaProjeto)
                }
                if (projetoSelecionado.valorDespesa) {
                    var despesaProjeto = projetoSelecionado.valorDespesa
                }
            }
        }
    }
    var resultadoFinalProjeto = (saldoInicialProjeto + rendaProjeto) - despesaProjeto
    console.log(resultadoFinalProjeto)
    console.log(saldoInicialProjeto)
    console.log(rendaProjeto)
    console.log(despesaProjeto)

    
    
    resultadoSaldoInicial.innerHTML = saldoInicialProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoRenda.innerHTML = rendaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoDespesa.innerHTML = despesaProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    resultadoSaldoFinal.innerHTML = resultadoFinalProjeto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

var ultimoProjetoSelecionadofunction = function() {
    for (i in listaProjetos) {
        if (i === ultimoProjetoSelecionado) {
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
