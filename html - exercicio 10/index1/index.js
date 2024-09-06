
const arrayNrs = [-27, 44, 32, -44, -23, 25, 23, 2, 19, 15, 22, 35, -15, 18, 30];

// Sort array values
arrayNrs.sort((a, b) => a - b)

// Qnt nrs negativos
function contarNegativos() {
    let countNegatives = 0;
    for (var i = 0; i < arrayNrs.length; i++) {
        if (arrayNrs[i] < 0) {
            countNegatives++;
        }
    }
    return countNegatives;
}
// Qnt nrs positivos
function contarPositivos() {
    let countPositives = 0;
    for (var i = 0; i < arrayNrs.length; i++) {
        if (arrayNrs[i] > 0) {
            countPositives++;
        }
    }
    return countPositives;
}
// Soma dos valores
function somaValores() {
    let soma = 0;
    for (var i = 0; i < arrayNrs.length; i++) {
        soma += arrayNrs[i];
    }
    return soma;
}
function mediaValores() {
    let media = 0;
    let totalElements = arrayNrs.length;
    media = somaValores() / totalElements;
    return media;
}
//Valor minimo e máximo
function valorMinimo() {
    let minimo = arrayNrs[0];
    for (var i = 1; i < arrayNrs.length; i++) {
        if (arrayNrs[i] < minimo) {
            minimo = arrayNrs[i];
        }
    }
    return minimo;
}
function valorMaximo() {
    let maximo = arrayNrs[0];
    for (var i = 1; i < arrayNrs.length; i++) {
        if (arrayNrs[i] > maximo) {
            maximo = arrayNrs[i];
        }
    }
    return maximo;
}
// Pares no Array
function contaPares() {
    let nrsPares = 0;
    for (var i = 0; i < arrayNrs.length; i++) {
        if (arrayNrs[i] % 2 === 0) {
            nrsPares++;
        }
    }
    return nrsPares;
}
function contaImpares() {
    let nrsImpares = 0;
    for (var i = 0; i < arrayNrs.length; i++) {
        if (arrayNrs[i] % 2 !== 0) {
            nrsImpares++;
        }
    }
    return nrsImpares;
}

document.getElementById('arrayOutput').innerText = arrayNrs.join(' | ');
document.getElementById('PositiveResults').innerText = contarPositivos();
document.getElementById('NegativeResults').innerText = contarNegativos();
document.getElementById('soma').innerText = somaValores();
document.getElementById('media').innerText = mediaValores();
document.getElementById('valorMinimo').innerText = valorMinimo();
document.getElementById('valorMaximo').innerText = valorMaximo();
document.getElementById('qtdPares').innerText = contaPares();
document.getElementById('qtdImpares').innerText = contaImpares();