// Escribe un programa que le pida al usuario un numero y muestre en consola su factorial
let numUser;

numUser = Number(prompt("Introduce numero"));

for (let i = numUser-1; i >= 1; i--) {
    numUser = numUser * i;
}

alert(numUser);