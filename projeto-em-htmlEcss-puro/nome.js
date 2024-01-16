// agrupar letra iguais em uma variavel
    // compara cada letra
// verificar qual vareavel é maior
const nome = `casa`;
const letra = [];
const repitidas = []

for (i of nome) {
    //console.log(i)
    letra.push(i);
    console.log(letra.length)
    repitidas.push(letra.indexOf(i));
}
const tamanhoRepitidas = Number(repitidas.length)
console.log(tamanhoRepitidas)


