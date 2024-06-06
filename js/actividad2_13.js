// Elabora una calculadora. El programa debe pedirle al 
// usuario un numero despues de un simbolo (+, -, *, /) 
// y despues otro número. El programa debe mostrar por 
// consola el resultado de la operacion

let num1, num2;
let simbolo, resultado;
let entradaCorrecta = true;

do {
    num1 = Number(prompt("Introduce un numero: "));
    num2 = Number(prompt("Introduce el siguiente numero: "));

    simbolo = Number(prompt("¿Que tipo de operacion quieres? -> 1.[+]  2.[-] 3.[*] 4.[/] 5.[**] 6.[%]"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Introduce numeros");
        entradaCorrecta = false;
    } else {
        switch (simbolo) {

            case 1: {
                resultado = num1 + num2;
                simbolo = "+";
                break;
            }
            case 2: {
                resultado = num1 - num2;
                simbolo = "-";
                break;
            }
            case 3: {
                resultado = num1 * num2;
                simbolo = "x";
                break;
            }
            case 4: {
                resultado = num1 / num2;
                simbolo = "/";
                break;
            }
            case 5: {
                resultado = num1 ** num2;
                simbolo = "**";
                break;
            }
            case 6: {
                resultado = num1 % num2;
                simbolo = "%";
                break;
            }
            default: alert("Introduce un valor correcto (Numero)");
        }

        alert(num1 + simbolo + num2 + "=" + resultado);
    }

} while (entradaCorrecta != true);

