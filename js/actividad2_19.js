// Crea un programa que muestre los numeros impares que no sean multiplo de 3 ni de 7 que hay del 
// 100 al 1. Realiza versiones del programa usando bucles while, do while y for.

let num = 100;

console.log("Usando while:");
while (num >= 1) {
    if (num % 2 !== 0 && num % 3 !== 0 && num % 7 !== 0) {
        console.log(num);
    }
    num--;
}


let numDoWhile = 100;
console.log("Usando do-while:");
do {
    if (numDoWhile % 2 !== 0 && numDoWhile % 3 !== 0 && numDoWhile % 7 !== 0) {
        console.log(numDoWhile);
    }
    numDoWhile--;
} while (numDoWhile >= 1);


console.log("Usando for:");
for (let numFor = 100; numFor >= 1; numFor--) {
    if (numFor % 2 !== 0 && numFor % 3 !== 0 && numFor % 7 !== 0) {
        console.log(numFor);
    }
}

