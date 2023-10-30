var listaProjetos = document.getElementById('lista-projetos')
var resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial')
var resultadoRenda = document.getElementById('resultadoRenda')
var resultadoDespesa = document.getElementById('resultadoDespesa')
var resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal')
var inputAdicionarRenda = document.getElementById('inputAdicionarRenda')
var confirmarAddRenda = document.getElementById('confirmarAddRenda')

var saldoInicialProjeto1 = 0
var rendaProjeto1 = 0
var despesaProjeto1 = 0
var resultadoFinalProjeto1 = 0



listaProjetos.onchange = function() {
    const seletor = document.getElementById('lista-projetos')
    const opcaoSelecionada = seletor.value
    if (opcaoSelecionada === 'projeto1') {
        rendaProjeto1 += Number(localStorage.getItem('renda'))
        despesaProjeto1 += Number(localStorage.getItem('despesa'))
        resultadoFinalProjeto1 = rendaProjeto1 - despesaProjeto1

        resultadoSaldoInicial.innerHTML = saldoInicialProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoRenda.innerHTML = rendaProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoDespesa.innerHTML = despesaProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        resultadoSaldoFinal.innerHTML = resultadoFinalProjeto1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        
    } else if (opcaoSelecionada === 'projeto2') {
        alert('Opcao2')
    } else if (opcaoSelecionada === 'projeto3') {
        alert('Opcao3')
    }
}