'use strict'

/* 

Programa que pida dos numeros y que nos diga cual es el mayor, el menor o si son iguales 
*/

// PLUS: Si los numeros son menores a cero o son letras, que nos los vuelva a pedir. 

var numero1 = parseInt(prompt("Introduce un número: ",0));
var numero2 = parseInt(prompt("Introduce otro número",0));     

while(numero1 <0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
 alert("Introduce un valor correcto");  
numero1 = parseInt(prompt("Introduce un número: ",0));
numero2 = parseInt(prompt("Introduce otro número",0));
    
}

  if(numero1 > numero2){
    console.log(numero1 + " es mayor");
    console.log(numero2 + " es menor");

}else if(numero2 > numero1){
    console.log( numero2 + " es mayor");
    console.log(numero1 + " es menor");

}else if(numero1 == numero2){
    console.log("Son iguales");
}else{
    alert("Introduce números correctos");
} 


