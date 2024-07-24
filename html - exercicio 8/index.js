function isPrime() {
    var num = document.getElementById("number").value;
    var flag = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
        }
    }
    if (flag == true) {
        document.getElementById("result").innerHTML = "The number is prime";
    } else {
        document.getElementById("result").innerHTML = "The number is not prime";
    }
}
function sum() {
    var n1 = 0, n2 = 0, r = 0;
    n1 = parseInt(document.getElementById('number1').value);
    n2 = parseInt(document.getElementById('number2').value);
    r = n1 + n2;
    document.getElementById('resultOp').innerText = r;
}
function sub() {
    var n1 = 0, n2 = 0, r = 0;
    n1 = parseInt(document.getElementById('number1').value);
    n2 = parseInt(document.getElementById('number2').value);
    r = n1 - n2;
    document.getElementById('resultOp').innerText = r;
}
function multi() {
    var n1 = 0, n2 = 0, r = 0;
    n1 = parseInt(document.getElementById('number1').value);
    n2 = parseInt(document.getElementById('number2').value);
    r = n1 * n2;
    document.getElementById('resultOp').innerText = r;
}
function div() {
    var n1 = 0, n2 = 0, r = 0;
    n1 = parseInt(document.getElementById('number1').value);
    n2 = parseInt(document.getElementById('number2').value);
    r = n1 / n2;
    document.getElementById('resultOp').innerText = r;
}
function calcCircunferencia() {
    var raio = document.getElementById('radius').value;
    if (raio <= 0 || isNaN(raio)) {
        alert('Por favor, insira um valor de raio válido!');
        return;
    }
    raio = parseFloat(raio);
    var perimetro = 2 * Math.PI * raio;
    var area = Math.PI * raio * raio;

    document.getElementById('perimeter').textContent = 'Perímetro: ' + perimetro.toFixed(2);
    document.getElementById('area').textContent = 'Área: ' + area.toFixed(2);
}
function calcPerimetro() {
    var lado1 = document.getElementById('lado1').value;
    var lado2 = document.getElementById('lado2').value;
    var lado3 = document.getElementById('lado3').value;

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert('Por favor, insira um valor de lado válido!');
    }
    else {
        lado1 = parseFloat(lado1);
        lado2 = parseFloat(lado2);
        lado3 = parseFloat(lado3);

        var perimetro = lado1 + lado2 + lado3;

        var area = (lado1 + lado2 + lado3) / 2;

        document.getElementById('perimeterTriangulo').textContent = 'Perímetro: ' + perimetro.toFixed(2);
        document.getElementById('areaTriangulo').textContent = 'Área: ' + area.toFixed(2);
    }
}
function isItHot() {
    var celsius = document.getElementById('celsius').value;
    if (celsius <= 0 || isNaN(celsius)) {
        alert('Por favor, insira um valor de temperatura válido!');
    }
    else {
        var fah = celsius * (9 / 5) + 32;
        document.getElementById('resultFah').textContent = 'Temperatura em Fahrenheit: ' + fah.toFixed(2);
    }
}