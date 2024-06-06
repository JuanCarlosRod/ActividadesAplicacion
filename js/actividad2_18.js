// Idea un programa en el que usar un bucle do while sea mejor idea que usar un bucle while

const contraseñaCorrecta = "1234";
let contraseñaUsuario;

//Se utiliza el do-while para asegurarnos que pedimos la contraseña al menos 1 vez. 
do {
    contraseñaIngresada = prompt("Ingrese la contraseña:");

    if (contraseñaIngresada !== contraseñaCorrecta) {
        alert("Contraseña incorrecta");
    }

} while (contraseñaIngresada !== contraseñaCorrecta);

alert("Contraseña correcta");



// Sin el do while tendremos que pedir la contraseña fuera del while al menos 1 vez

// contraseñaIngresada = prompt("Ingrese la contraseña:");

// while (contraseñaIngresada !== contraseñaCorrecta) {

//     contraseñaIngresada = prompt("Ingrese la contraseña:");

//     if (contraseñaIngresada !== contraseñaCorrecta) {
//         alert("Contraseña incorrecta");
//     }
// }

// alert("Contraseña correcta");