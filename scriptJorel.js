var listaProjetos = document.getElementById('lista-projetos')
var resultadoSaldoInicial = document.getElementById('resultadoSaldoInicial')
var resultadoRenda = document.getElementById('resultadoRenda')
var resultadoDespesa = document.getElementById('resultadoDespesa')
var resultadoSaldoFinal = document.getElementById('resultadoSaldoFinal')
var inputAdicionarRenda = document.getElementById('inputAdicionarRenda')
var confirmarAddRenda = document.getElementById('confirmarAddRenda')
var linkProjeto = document.getElementById('linkProjeto')
var listaProjetosExistentes = [];

var ultimoProjetoSelecionado = Number(localStorage.getItem('ultimoProjeto'))

var saldoInicialProjeto1 = 0
var saldoInicialProjeto2 = 0
var saldoInicialProjeto3 = 0

linkProjeto.onclick = function(){
    var projeto = {};
    projeto.id = listaProjetosExistentes.length + 1;
    projeto.nome = "projeto " + projeto.id;
    projeto.saldoInicial = 100;
    projeto.ListaDespesas = [];

    var despesa1 ={}; 
    despesa1.valor = 10;
    despesa1.descricao = "teste";
    despesa1.tipo = "Mercado"

    var despesa2 ={}; 
    despesa2.valor = 12;
    despesa2.descricao = "teste dois";
    despesa2.tipo = "Casa"

    projeto.ListaDespesas.push(despesa1);
    projeto.ListaDespesas.push(despesa2);

    
    projeto.ListaReceitas = [];

    listaProjetosExistentes.push(projeto);

        var option = new Option(projeto.nome, projeto.id);
        listaProjetos.appendChild(option);
    
}

var carregamentoInicial = function () {
    const seletor = document.getElementById('lista-projetos')
    const opcaoSelecionada = seletor.value

    var link = "adicionar-renda.html?idProjeto=" + opcaoSelecionada;
    var linkAdicionarRenda = document.getElementById("linkAdicionarRenda");
    linkAdicionarRenda.href = link;

    // Projeto 01
    if (opcaoSelecionada === '1') {

        localStorage.setItem('ultimoProjeto', '1')

        var rendaProjeto1 = Number(localStorage.getItem('renda1'))
        var despesaProjeto1 = Number(localStorage.getItem('despesa1'))
        var resultadoFinalProjeto1 = rendaProjeto1 - despesaProjeto1

        resultadoSaldoInicial.innerHTML = saldoInicialProjeto1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoRenda.innerHTML = rendaProjeto1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoDespesa.innerHTML = despesaProjeto1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoSaldoFinal.innerHTML = resultadoFinalProjeto1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        //Projeto 02
    } else if (opcaoSelecionada === '2') {

        localStorage.setItem('ultimoProjeto', '2')

        var rendaProjeto2 = Number(localStorage.getItem('renda2'))
        var despesaProjeto2 = Number(localStorage.getItem('despesa2'))
        var resultadoFinalProjeto2 = rendaProjeto2 - despesaProjeto2

        resultadoSaldoInicial.innerHTML = saldoInicialProjeto2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoRenda.innerHTML = rendaProjeto2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoDespesa.innerHTML = despesaProjeto2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoSaldoFinal.innerHTML = resultadoFinalProjeto2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    } else if (opcaoSelecionada === '3') {

        localStorage.setItem('ultimoProjeto', '3')

        var rendaProjeto3 = Number(localStorage.getItem('renda3'))
        var despesaProjeto3 = Number(localStorage.getItem('despesa3'))
        var resultadoFinalProjeto3 = rendaProjeto3 - despesaProjeto3

        resultadoSaldoInicial.innerHTML = saldoInicialProjeto3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoRenda.innerHTML = rendaProjeto3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoDespesa.innerHTML = despesaProjeto3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resultadoSaldoFinal.innerHTML = resultadoFinalProjeto3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
}

listaProjetos.onchange = function () {
    carregamentoInicial();
}

window.onload = function () {
    carregamentoInicial();
}

function teste() {
    for (var i = 0; i < listaProjetos.options.length; i++) {

        //console.log(listaProjetos.options[i].value)

        if (Number(listaProjetos.options[i].value) === ultimoProjetoSelecionado) {
            listaProjetos.selectedIndex = i
            break
        }
    }
    return (listaProjetos.selectedIndex = i)
}
//console.log(teste())