// Escribe un fragmento de código donde se aprecie la
//  diferencia de usar los tipos de variables let, var y const
var cont = 0;
const VUELTA = 5;

while(cont < VUELTA){
    let result = 0;
    result = result++;
    console.log('Resultado = ' + result);
    cont++;
}

console.log('Contador: ' + cont);
