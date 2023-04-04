
// De esta manera se activara una funcioanlidad de javaScript, que nos permitirá escribir codigo
// de mejor manera. Es decir con buenas practicas. Es recomendable colocar esta funcioanlidad en
// todos los archivos .js
'use strict'

// VARIABLES
// Una variable es un contenedor de informacion 

var pais = "Ecuador";
var continente = "America";
var fundacion = 1830;


// Se puede concatenar dos variables usando +
var pais_y_continente = pais+" "+continente;

// Se puede cambiar el valor de la variable
pais = "españa";
continente = "Europa";


console.log(pais);
console.log(pais, continente, fundacion);

alert(pais_y_continente+" "+fundacion);