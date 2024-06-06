// Escribe un programa que ponga en practica la siguiente logica:
// Mostrara el siguiente menu y el usuario debera elegir una de las opciones:
// Area del triangulo (b*h/2)
// Area del rectangulo (b*h)
// Area del circulo (pi*r**2)
// Salir

let opcion = 0, rb = 0, h = 0, r = 0, resultado = 0, salida = 0;

do {
    opcion = Number(prompt("Escoge una opcion -> [1].Area Triángulo [2].Area Rectángulo [3].Area Circulo [4].Salir"));

    switch (opcion) {
        case 1: {
            b = Number(prompt("Introduce la altura del triangulo"));
            h = Number(prompt("Introduce la altura del triangulo"));

            resultado = b * h / 2;

            alert("El area del triangulo es: " + resultado);
            break;
        }

        case 2: {
            b = Number(prompt("Introduce la altura del rectangulo"));
            h = Number(prompt("Introduce la altura del rectangulo"));

            resultado = b * h;
            alert("El area del rectangulo es: " + resultado);
            break;
        }
        case 3: {
            r = Number(prompt("Introduce el radio del circulo"));

            resultado = ((Math.PI * r) ** 2);
            alert("El area del circulo es: " + resultado);
            break;
        }
        case 4: {
            salida = 1
            alert("Has salido de la apliación");
            break;
        }
        default: alert("Introduce un valor correcto")
    }

} while (salida == 0);

