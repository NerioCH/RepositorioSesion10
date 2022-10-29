function ejercicio1(){
    const num1 = document.getElementById("ej1_numero1").value
    const num2 = document.getElementById("ej1_numero2").value
    const num3 = document.getElementById("ej1_numero3").value
    const num4 = document.getElementById("ej1_numero4").value
    const num5 = document.getElementById("ej1_numero5").value

    let mayor = 0
    let menor = 0
    let tercer_menor = 0

    const array_numeros = [parseInt(num1), parseInt(num2), parseInt(num3), parseInt(num4), parseInt(num5)]
    const distintos = new Set(array_numeros)
    if(Array.from(distintos).length==5){
        const array_ordenado = array_numeros.sort(function(a, b){
            return a-b
        })
        mayor = array_ordenado[4]
        menor = array_ordenado[0]
        tercer_menor = array_ordenado[2]
        document.getElementById("ej1_salida").value = "Mayor: "+mayor+", Menor: "+menor+", Tercer menor: "+tercer_menor
    }else{
        document.getElementById("ej1_salida").value = "Ingresa números diferentes"
    }

   
}

/*EJERCICIO 2 */
function SumarImpares() {
    const numero = document.getElementById("ej2_numero1").value;
    let suma = 0;

    const digitos = String(parseInt(numero)).length

    if(digitos==4){
        for (let index = 0; index < 4; index++) {
            const num = numero.toString()
            if (num[index]%2) {
                //console.log(num[index]);
                suma+=parseInt(num[index]);
            }
        }
        document.getElementById("ej2_salida").value = suma;
    }else{
        document.getElementById("ej2_salida").value = "Ingrese un número entre 1000 y 9999";
    }
}


/*EJERCICIO 3 */
function Moneda(){
    var a=document.getElementById("Soles").value;
    var d=a/4
    var e=a/4.1
    document.getElementById("Dolares").innerHTML=("Conversión a dolares: "+d.toFixed(2)+" USD");
    document.getElementById("Euros").innerHTML=("Conversión a euros: "+e.toFixed(2)+" EUR");
}
function Moneda1(){
    var d1=document.getElementById("Dolares1").value;
    var s=d1*4
    var e1=(s/4.1)
    document.getElementById("Soles1").innerHTML=("Conversión a soles: "+s.toFixed(2)+" PEN");
    document.getElementById("Euros1").innerHTML=("Conversión a euros: "+e1.toFixed(2)+" EUR");
}


/*EJERCICIO 4 */
function SumaNoPrimosImpares() {

    const numero = document.getElementById("ej4_numero").value;
    const digitos = String(parseInt(numero)).length

    if(digitos==5){
        // numero de 5 cifras
        let suma = 0;
        for (let index = 0; index < 5; index++) {
            const num = numero.toString()
            if (!this.esPrimo(num[index])) {
                //console.log(num[index]);
                if (num[index]%2) {
                    //console.log(num[index]);
                    suma+=parseInt(num[index]);
                }
            }
        }
        document.getElementById("ej4_salida").value = suma;   
    }else{
        document.getElementById("ej4_salida").value = "Ingresa un número de 5 cifras";   
    }
}

function esPrimo(numero) {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}
