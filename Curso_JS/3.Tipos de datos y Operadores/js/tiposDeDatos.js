'use strict'

// Operadores

var numero1 = 7;
var numero2 = 12;
var operacionSuma = numero1 + numero2;
var operacionResta = numero1 - numero2;
var operacionMulti = numero1 * numero2;
var operacionDivi = numero1 / numero2;

// Ver el resto de la divicion
var operacionResto = numero2 % numero1;


//alert("El resultado de la operacion es: "+operacionSuma); 
//
//alert("El resultado de la operacion es: "+operacionResta);   

alert("El resultado de la operacion es: "+operacionResto);  

// Tipos de datos

var numero_entero = 22;
var cadena_texto = "Hola mundo!";
var verdadero_o_falso = true;
var verdadero_o_falso2 = 0;

// Funcion para cambiar de un dato a otro
var numero_falso = "33";
var numero_real = 7; 

console.log(Number(numero_falso) + numero_real);

console.log(parseInt(numero_falso));

// Lo contrario

console.log(numero_real+10); // lo va a sumar
console.log(String(numero_real)+10);  


// Detectar el tipo de dato

console.log(typeof numero_falso);
console.log(typeof verdadero_o_falso);
console.log(typeof verdadero_o_falso2);
console.log(typeof cadena_texto);




