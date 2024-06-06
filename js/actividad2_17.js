// Escribe un conversor de tiempo. El programa debe pedirle al usuario una cantidad de dias,
// horas y minutos, y el programa devolvera la cantidad de segundos que son

const segundosXDia = 86400;
const segundosXHora = 3600;
const segundosXMinuto = 60; 

let dias = Number(prompt("Ingrese la cantidad de días:"));
let horas = Number(prompt("Ingrese la cantidad de horas:"));
let minutos = Number(prompt("Ingrese la cantidad de minutos:"));

let totalSegundos = (dias * segundosXDia) + (horas * segundosXHora) + (minutos * segundosXMinuto);

// Mostrar el resultado
alert("El total de segundos es: " + totalSegundos);

