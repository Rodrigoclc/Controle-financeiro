function escreverNome(nome) {
    return (nome);
}

function resolvaMaiorIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

function calcularDesconto(preco, formaDePagamento) {
    if (formaDePagamento === 1) {
        return preco - (preco * 0.1)
    } else if (formaDePagamento === 2) {
        return preco - (preco * 0.15)
    } else if (formaDePagamento === 3) {
        return preco
    } else {
        return preco + (preco * 0.1)
    }
}

class Carros {
    marca;
    cor;
    mediaPorKm;

    constructor(marca, cor, mediaPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.mediaPorKm = mediaPorKm;
    } 
	// quantidade de km e preço do combustível = valor gasto
    calcularGastoDeCombustivel(km, p) {
		return km * this.mediaPorKm * p;
    } 
} 

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura));
    }

    classificarImc() {
        const imc = this.calcularImc()
        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc < 25) {
            return 'Peso normal'
        } else if (imc < 30) {
            return 'Acima do peso'
        } else if (imc < 40) {
            return 'Obeso'
        } else {
            return 'Obesidade grave'
        }
    }
}

(function() {
    console.log(`O ${escreverNome('Rodrigo')} é ${resolvaMaiorIdade(28)} e nessa compra ira pagar o ${calcularDesconto(100, 4)}`);

    const uno = new Carros('fiat', 'branco', 1/12);
    console.log(`Gastarei em minha viagem de uno ${uno.calcularGastoDeCombustivel(70, 5)} reis`);   
    const palio = new Carros('fiat', 'preto', 1/10);
    console.log(`Gastarei em minha viagem de palio ${palio.calcularGastoDeCombustivel(70, 5)} reis`);

    const jose = new Pessoa('Jose', 70, 1.75);
    console.log(jose.calcularImc());
    const renan = new Pessoa('Renan', 63, 1.75);
    console.log(renan.calcularImc());
    const vitor = new Pessoa('Vitor', 60, 1.69);
    console.log(vitor.calcularImc());
    console.log(vitor.classificarImc());
})()