'use strict'

// Condicional if
// Si A es igual a B entonces haz algo

var edad1 = 30;
var edad2 = 22;

// si pasa esto 
if(edad1 > edad2){
   
   // Ejecuta esto
   console.log("Edad 1 es mayor que edad 2")
}else{
    console.log("Entonces edad 2 es mayor")
}


var edad = 25; 
var nombre = "Juna Suarez";

/*Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual <=
    Igual: =
    Distinto: !=
*/

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad ");
    
    if(edad == 30){
        console.log("Aun eres millenial")
    }else if (edad >= 70){
        console.log("Eres anciano")
    }else{
        console.log("Ya no eres millenial")
    }
    
}else{
    
    console.log(nombre + " tiene " + edad + " años, es menor de edad ");

}


/* 
    // Operadores Lógicos
    
    AND (Y): &&
    OR(O): ||
    Negacion: !
*/

var year = 2018;

// Negacion
if(year != 2016){
   console.log("EL año no es 2016");
}

// AND 

if(year >= 2000 && year <= 2020 && year !=2018 ){
    console.log("Ëstamos en la era actual");
}else{
    console.log("Ëstamos en la era Post-Moderna");

}


// OR 

if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}else{
    console.log("Ël año es diferente");

}


if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("El año es diferente");

}


// Conficional Switch 

var edad3 = 18;
var imprime = "";


switch(edad3){
        
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "AYa eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}
    console.log("Mensaje: " + imprime);
















