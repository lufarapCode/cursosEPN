'use strict'

// BUCLE FOR
// Bucle es una estructura de control que se repite varias veces

for(var i=0; i<=10; i++ ){
    
    console.log("numero: " + i);
}

// BUCLE WHILE

var year = 2018;

while(year <= 2051){
      
    // ejecuta esto
    console.log("Estamos en el año "+ year);
    
    if (year == 2030){
        // esta sentencia corta el bucle
        break;
    }
    year ++;
}

// BUCLE DO WHILE

var years = 21;

do{
    alert("Solo cuando sea diferente a 20");
    years = 20;  
    
}while(years != 20);



