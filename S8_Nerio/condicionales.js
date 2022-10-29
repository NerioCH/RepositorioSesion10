function calcular() {
    var a = parseInt(document.getElementById('numero1').value);
    var b = parseInt(document.getElementById('numero2').value);
    var c = parseInt(document.getElementById('numero3').value);
    var d = parseInt(document.getElementById('numero4').value);
    var e = parseInt(document.getElementById('numero5').value);
    var ma = a;
    var menor = a;
    if(b > ma) ma = b;
    if(c > ma) ma = c;
    if(d > ma) ma = d;
    if(e > ma) ma = e;
    
    if(b < menor) menor = b;
    if(c < menor) menor = c;
    if(d < menor) menor = d;
    if(e < menor) menor = e;
    
    var medio = ma;
    if(a<medio && a>menor) medio = a; 
    if(b<medio && b>menor) medio = b; 
    if(c<medio && c>menor) medio = c; 
    if(d<medio && d>menor) medio = d; 
    if(e<medio && e>menor) medio = e; 

    var medio2 = ma;
    if(a<medio2 && a>medio) medio2 = a; 
    if(b<medio2 && b>medio) medio2 = b; 
    if(c<medio2 && c>medio) medio2 = c; 
    if(d<medio2 && d>medio) medio2 = d; 
    if(e<medio2 && e>medio) medio2 = e; 

    document.getElementById('resultado').innerHTML = "Mayor: " + ma + ", Menor: " + menor + ", Medio: " + medio2;
}

function calcularCondicionalDoble() {
    var a = parseInt(document.getElementById('numero1').value);
    var b = parseInt(document.getElementById('numero2').value);
    var c = parseInt(document.getElementById('numero3').value);
    var d = parseInt(document.getElementById('numero4').value);
    var e = parseInt(document.getElementById('numero5').value);
    if (a > b) {
        if (a > c) {
            if (a > d) {
                if (a > e) {
                    ma = a
                } else {
                    ma = e
                }
            }
        } else {
            if (c > d) {
                if (c > e) {
                    ma = c;
                } else {
                    ma = e;
                }
            } else {
                if (d > e) {
                    ma = d;
                } else {
                    ma = e;
                }
            }
        }
    } else {
        if (b > c) {
            if (b > d) {
                if (b > e) {
                    ma = b;
                } else {
                    ma = e;
                }
            } else {
                if (d > e) {
                    ma = d
                } else {
                    ma = e;
                }
            }
        } else {
            if (c > d) {
                if (c > e) {
                    ma = c
                } else {
                    ma = e;
                }
            } else {
                if (d > e) {
                    ma = d
                } else {
                    ma = e;
                }
            }
        }
    }
    // return ma;
    document.getElementById('resultado').innerHTML = "Mayor: " + ma;

}


n = parseInt(window.prompt('ingrese numero: '));
function factorialNumero(){
    if(n === 1) 
      return 1;
    else 
    document.getElementById('resultado').innerHTML = n * f1((n-1));
  }