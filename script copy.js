var listaProjetos = document.getElementById('lista-projetos')
var resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial')
var resultadoRenda = document.getElementById('resultadoRenda')
var resultadoDespesa = document.getElementById('resultadoDespesa')
var resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal')

var ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'))
var novoprojeto = localStorage.getItem('novoprojeto')

var saldoInicialProjeto1 = 0
var saldoInicialProjeto2 = 0
var saldoInicialProjeto3 = 0


localStorage.setItem('TotalProjetos', listaProjetos.length)

// tentativa de adicionar options
// for (var i = 0; i < listaProjetos.length; i++) {
//     //console.log(listaProjetos.options[i].text)
//     if (listaProjetos.options[i].text != novoprojeto) {
//         var option = new Option(novoprojeto);
//         listaProjetos.appendChild(option);
//         console.log(ultimoProjetoSelecionado + 1)
//         break;
//     } 
// }

var funçaoPrincipal = function() { 

    const opcaoSelecionada = listaProjetos.value

    localStorage.setItem('ultimoProjeto', opcaoSelecionada)
    
    var rendaProjeto = Number(localStorage.getItem(`renda${opcaoSelecionada}`))
    var despesaProjeto = Number(localStorage.getItem(`despesa${opcaoSelecionada}`))
    var resultadoFinalProjeto = rendaProjeto - despesaProjeto

    resultadoSaldoInicial.innerHTML = saldoInicialProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
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
