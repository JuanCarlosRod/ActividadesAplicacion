// Crea un programa en JavaScript para calcular la letra de un DNI 
// que debe de introducir el usuario por teclado(en internet la formula que lo calcula).

let dniUsuario, resultadoLetra, letra;
let dniCorr = true;

do {
    dniUsuario = Number(prompt("Introduce tu DNI: "));

    if (isNaN(dniUsuario)) {
        alert("Introduce numeros");
        dniCorr = false
    } else {
        resultadoLetra = dniUsuario % 23;

        switch (resultadoLetra) {
            case 0: letra = "T"; break;
            case 1: letra = "R"; break;
            case 2: letra = "W"; break;
            case 3: letra = "A"; break;
            case 4: letra = "G"; break;
            case 5: letra = "M"; break;
            case 6: letra = "Y"; break;
            case 7: letra = "F"; break;
            case 8: letra = "P"; break;
            case 9: letra = "D"; break;
            case 10: letra = "X"; break;
            case 11: letra = "B"; break;
            case 12: letra = "N"; break;
            case 13: letra = "J"; break;
            case 14: letra = "Z"; break;
            case 15: letra = "S"; break;
            case 16: letra = "Q"; break;
            case 17: letra = "V"; break;
            case 18: letra = "H"; break;
            case 19: letra = "L"; break;
            case 20: letra = "C"; break;
            case 21: letra = "K"; break;
            case 22: letra = "E"; break;
            default: alert("Introduce valor correcto");
        }

        alert("El dni es: " + dniUsuario + letra)
    }
} while (dniCorr != true);
