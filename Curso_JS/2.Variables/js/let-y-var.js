'use strict'
// Variables con let y var

// La princial diferencia ente let y var es el alcance
// que tiene la variable y como actua en funcion a los 
// diferentes bloques


// PRUEBA CON VAR
var numero = 40;  // valor 40;
console.log(numero);

if(true){
    
    // numero = 50 'es lo mismo'
    var numero = 50;
    console.log(numero); // valor 50;
}

console.log(numero); // valor 50;

// PRUEBA CON LET

var texto = "Curso JS";
console.log(texto); // valor js

// el let solo actua en el bloque de codigo donde se lo declaró
if(true){
    let texto = "Curso CSS"; 
    console.log(texto); // valor css
}

console.log(texto); // valor js 


