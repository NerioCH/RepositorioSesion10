function Imprimir1al100() {
    let resultado = '';
    for (let index = 1; index <= 100; index++) {
        console.log(index);
        resultado += index + ', ';
        document.getElementById('numeros').innerHTML = resultado;
    }
}

//multiplos de 3
function Multiplostres() {
    let resultado = '';
    for (let index = 1; index <= 100; index += 2) {
        console.log(index);
        resultado += index + ', ';
        document.getElementById('numeros').innerHTML = resultado;
    }
}

// suma de numeros impares y pares < 50

function sumarParesImpares() {
    sumaPares = 0;
    sumaImpares = 0;
    for (let index = 0; index < 50; index++) {
        if (index % 2 == 0) {
            sumaPares += index;
        } else {
            sumaImpares += index;
        }
    }

    document.getElementById('resultado1').innerHTML = 'Suma de Pares: ' + sumaPares + ', Suma de Impares: ' + sumaImpares;
}

// ejercicio en clase

function imprimirSecuencia1() {
    n = parseInt(document.getElementById('numero').value);
    secuencia = '';
    for (let index = 1; index <= n; index++) {
        if (index % 2 == 1) secuencia += ' 1 ';
        else secuencia += ' 0 ';
    }
    document.getElementById('resultado').innerHTML = 'Secuencia: ' + secuencia;
}

function imprimirSecuencia2() {
    n = parseInt(document.getElementById('numero').value);
    secuencia = '';
    for (let index = 1; index <= n; index++) {
        if (index % 2 == 1) secuencia += ' -1 ';
        else secuencia += ' 1 ';
    }
    document.getElementById('resultado2').innerHTML = 'Secuencia: ' + secuencia;
}

function imprimirSecuencia3() {
    n = parseInt(document.getElementById('numero').value);
    secuencia = '';
    contador = 0;
    signo = ''
    for (let index = 1; index <= n; index++) {
        if (index % 2 == 1) {
            secuencia += signo + ' 1 ';
        } else {
            contador++;
            secuencia += signo + ' 2 ';
            if (contador % 2) {
                signo = ' - ';
            } else {
                signo = '';
            }
        }
    }
    document.getElementById('resultado3').innerHTML = 'Secuencia: ' + secuencia;
}

function imprimirSecuencia4() {
    n = parseInt(document.getElementById('numero').value);
    secuencia = '3';
    contador = 1;
    for (let index = 1; index < n; index++) {
        let resto = index % 3;
        if (resto == 0) secuencia += ' 3 ';
        if (resto == 1) secuencia += ' 4 ';
        if (resto == 2) secuencia += ' 5 ';
    }
    document.getElementById('resultado4').innerHTML = 'Secuencia: ' + secuencia;
}

// Desarrollo en clase

function Serie4() {
    N = 8;
    for (x = 3, i = 1; i <= N; i++, x++) {
        console.log(x);
        if (x == 5) x = 2;
    }
}
function Serie3() {
    N = 8;
    for (x = 1, s = 1, i = 1; i <= N; i++, x++) {
        console.log(s * x);
        if (x == 2) {
            x = 0;
            s *= -1;
        }
    }
}
function Serie2() {
    N = 8;
    for (x = -1, i = 1; i <= N; i++, x *= -1) {
        console.log(x);
    }
}
function Serie1() {
    N = 8;
    for (x = 1, i = 1; i <= N; i++, x--) {
        console.log(x);
        if (x == 0) {
            x = 2;
        }
    }
}