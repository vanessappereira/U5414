function verificarAno() {
    /* 
    De 4 em 4 anos é ano bissexto.
    De 400 em 400 anos é ano bissexto.
    
    De 100 em 100 anos não é ano bissexto. */

    var ano = document.getElementById('year').value;
    // Verifica se o ano é válido (não é vazio ou zero)
    if (!isNaN(ano) && ano > 0) {
        if (ano % 4 == 0 || ano % 400 == 0) {
            document.getElementById('resultYear').innerHTML = `Tipo: ${ano} é ano bissexto`;
        } else if (ano % 100 != 0) {
            document.getElementById('resultYear').innerHTML = `Tipo: ${ano} é ano comum`;
        }
    } else {
        document.getElementById('resultYear').innerHTML = 'Por favor, insira um ano válido';
    }
}

function calcIVA() {
    const baseValueInput = document.getElementById('baseValue');
    const valorIVAInput = document.querySelector('input[name="iva"]:checked');
    const resultElement = document.getElementById('resultIVA');

    if (!baseValueInput || !valorIVAInput || !resultElement) {
        console.error('Required elements not found');
        return;
    }

    const baseValue = parseFloat(baseValueInput.value);
    const valorIVA = parseFloat(valorIVAInput.value);

    if (isNaN(baseValue) || isNaN(valorIVA)) {
        resultElement.innerHTML = 'Por favor, insira um valor válido';
        return;
    }

    const valorFinal = baseValue + (valorIVA * baseValue / 100);
    resultElement.innerHTML = `Valor final: ${valorFinal.toFixed(2)}`;
}


function verificarNumero() {
    // Verificar numeros primos e compostos e mostrar o numero de divisores
    const numero = parseInt(document.getElementById('numberInput').value);
    let primo = true;
    const divisores = [];
    const divisiveis = [];

    if (!isNaN(numero) && numero > 0) {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                divisores.push(i);
                if (i !== numero / i) {
                    divisores.push(numero / i);
                }
            }
        }
        if (primo) {
            for (let i = 1; i <= 10; i++) {
                divisiveis.push(numero * i);
            }
        }
    }
    const resultado = primo ? `Tipo: ${numero} é primo` : `Tipo: ${numero} é composto`;
    document.getElementById('resultNumber').innerHTML = resultado;

    if (!primo) {
        const listaDivisores = divisores.join(', ');
        document.getElementById('resultDivisores').innerHTML = `Nº divisores: ${listaDivisores}`;
    } else {
        const listaDivisiveis = divisiveis.join(', ');
        document.getElementById('resultDivisores').innerHTML = `Nº divisiveis: ${listaDivisiveis}`;
    }
}

// Recursive Fibonacci function
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Iterative Fibonacci function
function fibonacciIterative(n) {

}

