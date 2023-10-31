var listaProjetos = document.getElementById('lista-projetos')
var resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial')
var resultadoRenda = document.getElementById('resultadoRenda')
var resultadoDespesa = document.getElementById('resultadoDespesa')
var resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal')
var inputAdicionarRenda = document.getElementById('inputAdicionarRenda')
var confirmarAddRenda = document.getElementById('confirmarAddRenda')

var saldoInicialProjeto1 = 0
var saldoInicialProjeto2 = 0



listaProjetos.onchange = function() {
    const seletor = document.getElementById('lista-projetos')
    const opcaoSelecionada = seletor.value
    // Projeto 01
    if (opcaoSelecionada === 'projeto1') {
        
        var rendaProjeto1 = Number(localStorage.getItem('renda1'))
        var despesaProjeto1 = Number(localStorage.getItem('despesa1'))
        var resultadoFinalProjeto1 = rendaProjeto1 - despesaProjeto1

        resultadoSaldoInicial.innerHTML = saldoInicialProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoRenda.innerHTML = rendaProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoDespesa.innerHTML = despesaProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoSaldoFinal.innerHTML = resultadoFinalProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        
        //Projeto 02
    } else if (opcaoSelecionada === 'projeto2') {
        var rendaProjeto2 = Number(localStorage.getItem('renda2'))
        var despesaProjeto2 = Number(localStorage.getItem('despesa2'))
        var resultadoFinalProjeto2 = rendaProjeto2 - despesaProjeto2

        resultadoSaldoInicial.innerHTML = saldoInicialProjeto2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoRenda.innerHTML = rendaProjeto2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoDespesa.innerHTML = despesaProjeto2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoSaldoFinal.innerHTML = resultadoFinalProjeto2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    } else if (opcaoSelecionada === 'projeto3') {
        alert('Opcao3')
    }
}