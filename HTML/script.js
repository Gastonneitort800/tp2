 // Ejercicio 1:-------------------------------------------------------------------------------------------------------
// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// Forma 1

    /*let edad = parseInt (prompt(`ingrese su edad`));
    
    if (isNaN(edad)) {
        document.write(`el valor ingresado no es un numero`);
    } else if (edad >= 18) {
        document.write(`ya puede conducir`);
    }
     else {
        document.write(`aun no puede conducir`);
    }*/


//forma 2

    /*let edad = parseInt (prompt(`ingrese su edad`));
    let verificacion = 0;

    while (verificacion == 0) {
        verificacion = 1;

        if (isNaN(edad)) {
            alert(`el valor ingresado no corresponde a un numero`)
            edad = parseInt (prompt(`ingrese su edad de manera correcta`));
            verificacion = 0;    
        }    
    }

    if (edad >= 18) {
        document.write(`ya puede conducir`);
    } else {
        document.write(`aun no puede conducir`);
    } */






// Ejercicio 2:-------------------------------------------------------------------------------------------------------
// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// let nota = parseInt (prompt(`ingrese un numero del 0 al 10:`));

// if (isNaN(nota)) {
//     console.log (`Introduce un numero valido!!!`);
// } else {
//     switch (nota) {
//         case 0:
//         case 1:
//         case 2:
//             console.log (`Muy deficiente`);
//         break;
//         case 3:
//         case 4:
//             console.log (`Insuficiente`);
//             break;
//         case 5:
//         case 6:
//             console.log (`Suficiente`);
//             break;
//         case 7:
//             console.log (`Bien`);
//             break;
//         case 8:
//         case 9:
//             console.log (`Notable`);
//             break;
//         case 10:
//             console.log (`Sobresaliente`);
//             break;
//         default:
//             console.log (`Numero erroneo`);
//             break;
//     }    
// }






// Ejercicio 3:-------------------------------------------------------------------------------------------------------
// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// let cadena = "";


// do {
//     let ingreso = prompt (`ingrese una cadena de texto`)
//     cadena = cadena + ingreso + " - " 
// } while (confirm("quiere continuar ingresando texto"));

// console.log(cadena);






// Ejercicio 4:-------------------------------------------------------------------------------------------------------
// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let suma = 0 ;


// do {
//     let ingreso = parseInt(prompt (`ingrese un numero`));
//     if (isNaN(ingreso)) {
//         alert(`el valor ingresado no es un nuero`);
//     } else {
//         suma = suma + ingreso;
//         console.log(suma);
//     }


// } while (confirm("quiere continuar ingresando numeros para sumar"));

// console.log(suma);






// Ejercicio 5:-------------------------------------------------------------------------------------------------------
// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».


// let comprobar = 0;
// let DNI = "";
// let numero;
// let modulo



// while (DNI != null) {
//     DNI = prompt(`cual es su numero de DNI?`);
//     if (DNI != null) {
//         numero = parseInt(DNI);
    
//         if (isNaN(numero)) {
//             alert(`el numero ingresado no es un numero.`)
//         }  else if (numero >= 0 && numero < 100000000 ) {
//             modulo = numero % 23;
//             switch (modulo) {
//                 case 0:
//                     console.log (`T`);
//                 break;
//                 case 1:
//                     console.log (`R`);
//                 break;
//                 case 2:
//                     console.log (`W`);
//                 break;
//                 case 3:
//                     console.log (`A`);
//                 break;
//                 case 4:
//                     console.log (`G`);
//                 break;
//                 case 5:
//                     console.log (`M`);
//                 break;
//                 case 6:
//                     console.log (`Y`);
//                 break;
//                 case 7:
//                     console.log (`F`);
//                 break;
//                 case 8:
//                     console.log (`P`);
//                 break;
//                 case 9:
//                     console.log (`D`);
//                 break;
//                 case 10:
//                     console.log (`X`);
//                 break;
//                 case 11:
//                     console.log (`B`);
//                 break;
//                 case 12:
//                     console.log (`N`);
//                 break;
//                 case 13:
//                     console.log (`J`);
//                 break;
//                 case 14:
//                     console.log (`Z`);
//                 break;
//                 case 15:
//                     console.log (`S`);
//                 break;
//                 case 16:
//                     console.log (`Q`);
//                 break;
//                 case 17:
//                     console.log (`V`);
//                 break;
//                 case 18:
//                     console.log (`H`);
//                 break;
//                 case 19:
//                     console.log (`L`);
//                 break;
//                 case 20:
//                     console.log (`C`);
//                 break;
//                 case 21:
//                     console.log (`K`);
//                 break;
//                 default:
//                     console.log (`E`);
//                 break;
//             } 
//         }
//         else {
//             alert(`El numero ingresado no corresponde a un DNI.`)
//         } 
//     }
// }








// Ejercicio 6:-------------------------------------------------------------------------------------------------------
// Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….




// let cadena
// let caracter

// for (let i = 1; i < 31; i++) {
//     cadena = "";
//     caracter = String(i);
//     for (let j = 0; j < i; j++) {
//         cadena = cadena + caracter;
//     }
//     console.log(cadena);
// }







// Ejercicio 7:-------------------------------------------------------------------------------------------------------
// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).


// let cadena
// let caracter

// for (let i = 30; i >= 0; i--) {
//     cadena = "";
//     caracter = String(i);
//     for (let j = 0; j < i; j++) {
//         cadena = cadena + caracter;
//     }
//     console.log(cadena);
// }







// Ejercicio 8:-------------------------------------------------------------------------------------------------------
// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……




// let numero = parseInt(prompt (`Ingrese un numero que se encuentre entre el 1 al 50`));
// let cadena
// let caracter

// if (isNaN(numero)) {
//     alert(`el valor ingresado no es un numero.`)
// } else if (numero >= 0 && numero < 51 ) {
//     for (let i = 1; i < numero + 1 ; i++) {
//         cadena = "";
//         caracter = String(i);
//         for (let j = 0; j < i; j++) {
//             cadena = cadena + caracter;
//         }
//         console.log(cadena);
//     }
    
// } else {
//     alert(`El numero ingresado no se encuentra entre 1 y 50`)
// }











// Ejercicio 9:-------------------------------------------------------------------------------------------------------
// Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-
// 
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10




// for (let i = 1; i < 501; i++) {
    
//     if (i % 4 == 0 && i % 9 == 0) {
//         console.log(`${i} (multiplo de 4 y 9)`);
//     } else if (i % 4 == 0) {
//         console.log(`${i} (multiplo de 4)`);
//     } else if (i % 9 == 0)  {
//         console.log(`${i} (multiplo de 9)`);
//     } else {
//         console.log(i);
//     }
        
//     if (i % 5 == 0) {
//     console.log(`————————————————————`);
//     }
    
// }





// Ejercicio 10:-------------------------------------------------------------------------------------------------------
//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// let columnas = parseInt(prompt(`ingrese el numero de columnas`));
// let filas = parseInt(prompt(`ingrese el numero de columnas`));
// let numero = columnas * filas;
// let celda;

// for (let i = 0; i < columnas; i++) {
//     for (let j = 0; j < filas; j++) {
//         celda = numero;
//         numero = numero - 1;
//         console.log(`el valor de la celda de la columna ${i+1} y fila ${j+1} tiene el valor: ${celda} `);
//     }
    
// }






// Ejercicio 11:-------------------------------------------------------------------------------------------------------
// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// let nombres = [];
// let edades = [];



// for (let i = 0; i < 3; i++) {
//     nombres.push(prompt(`ingrese un nombre:`)) ;
//     console.log (nombres);
//     edades.push(prompt(`ingrese la edad de ${nombres[i]}`)) ;
//     console.log (edades);
// }
// if (edades [1] > edades[2]) {
//     if (edades [1] > edades [3]) {
//        document.write(`${nombres [1]} es el mayor de los tres `);
//     } else {
//        document.write(`${nombres [3]} es el mayor de los tres `);
//     }
// } else {
//     if (edades [2] > edades [3]) {
//        document.write(`${nombres [2]} es el mayor de los tres `);
//     } else {
//        document.write(`${nombres [3]} es el mayor de los tres `);
//     }
// }


// Ejercicio 12:-------------------------------------------------------------------------------------------------------
// Realiza un script que genere un número aleatorio entre 1 y 99


// let i = true
// let numeroAleatorio
// while (i) {
//     numeroAleatorio = Math.floor(Math.random()*100);
//     if (numeroAleatorio > 0 && numeroAleatorio < 100) {
//         i = false ;
//     }
// }

// console.log(numeroAleatorio);





// Ejercicio 13:-------------------------------------------------------------------------------------------------------
// Realiza un script que pida un texto y lo muestre en mayúsculas.

// let cadena = prompt(`ingresar una cadena de texto:`);
// console.log(cadena.toUpperCase());





// Ejercicio 14:-------------------------------------------------------------------------------------------------------
// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.





// let cadena = prompt(`ingresar una cadena de texto:`);
// let salida ="";


// for (let i = 0; i < cadena.length; i++) {
//     if (i==0) {
//         salida = cadena[i];
//     } else {
//         salida = salida + "-" + cadena[i];
//     }
// }
// console.log(salida);




// Ejercicio 15:-------------------------------------------------------------------------------------------------------
// Realiza un script que cuente el número de vocales que tiene un texto.



// let cadena = prompt(`ingresar una cadena de texto:`).toLowerCase();
// let salida = 0;

// for (let i = 0; i < cadena.length; i++) {

//     if (cadena[i]== "a" || cadena[i]== "e" || cadena[i]== "i" || cadena[i]== "o" || cadena[i]== "u" )  {
//         salida = salida + 1;
//     }
// }
// console.log(`El texto tiene ${salida} vocales.`);





// Ejercicio 16:-------------------------------------------------------------------------------------------------------
// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


// let cadena = prompt(`ingresar una cadena de texto:`);
// let salida = "";

// for (let i = cadena.length - 1 ; i >= 0; i-- ) {
//     salida = salida + cadena[i];
    
// }
// console.log(salida);





// Ejercicio 17:-------------------------------------------------------------------------------------------------------
// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1



// let cadena = prompt(`ingresar una cadena de texto:`).toLowerCase();
// let pos = 0;
// let vocal = "";
// let corte;

// for (let i = 0; i < cadena.length; i++) {
//     switch (cadena[i]) {
//         case "a":
//             pos = i;
//             vocal = "a";
//             corte = true;            
//         break;
//         case "e":
//             pos = i;
//             vocal = "e";    
//             corte = true;           
//         break;
//         case "i":
//             pos = i;
//             vocal = "i";    
//             corte = true;           
//         break;
//         case "o":
//             pos = i;
//             vocal = "o";    
//             corte = true;           
//         break;
//         case "u":
//             pos = i;
//             vocal = "u";    
//             corte = true;           
//         break;
//         default:
//         break;
//     }
//     if (corte == true) {
//         break;
//     }
// }
// console.log(`la vocal '${vocal}' está en la posición ${pos}.`);