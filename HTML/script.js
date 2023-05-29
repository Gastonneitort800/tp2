/*  1

let edad = prompt("Ingresar edad")

if(edad>=18){
    document.write("Puede conducir.")
}
else if(edad<18){
    document.write("No puede conducir.")
}
else{
    document.write("Edad ingresada no es número válido.")
}

*/

/*  2
let nota = parseInt(prompt("Ingresar nota"))

if(nota<0 || nota>10){
    alert("Número erróneo");
}
else if(isNaN(nota)){
    alert("Número inválido");
}

while(nota<0 || nota>10 || isNaN(nota)){
    nota = parseInt(prompt("Ingresar nota válida (0 a 10)"));

    if(nota === null){
        break;
    }
    else if(nota<0 || nota>10){
        alert("Número erróneo");
    }
    else if(isNaN(nota)){
        alert("Número inválido");
    }
}

if(nota>=0 && nota<=2){
    alert("Muy deficiente");
}
else if(nota>=3 && nota<=4){
    alert("Insuficiente");
}
else if(nota>=5 && nota<=6){
    alert("Suficiente");
}
else if(nota === 7){
    alert("Bien");
}
else if(nota>=8 && nota<=9){
    alert("Notable");
}
else if(nota === 10){
    alert("Sobresaliente");
}

*/

/*  3

let cadena = ""
let cadenaConcatenada = ""
let i = 0

do{
    cadena = prompt("Ingresar cadena de texto");

    if(i === 0 && cadena != null){
        cadenaConcatenada = cadena;
    }
    else if(cadena != null){
        cadenaConcatenada = cadenaConcatenada + " - " + cadena;
    }

    i++;

}while(confirm("¿Desea ingresar otra cadena de texto?") == true);

if(cadena == null){
    document.write("No se ha ingresado ninguna cadena.");
}
else{
    document.write("El resultado de las cadenas concatenadas es: " + cadenaConcatenada);
}

*/




/*4


let sumaNumeros = 0
let numero = 0

do{
    numero = prompt("Ingresar número para la suma");

    if(numero != null){

        numero = parseInt(numero);

        while(isNaN(numero)){
            alert("NO se ingresó un número.\nPor favor, ingresar número para la suma.");
            numero = parseInt(prompt("Ingresar número para la suma"));
        }

        sumaNumeros = sumaNumeros + numero;
    }

}while(numero != null);

document.write("La suma de los números ingresados es = " + sumaNumeros)

*/



/*5

let dni = 0
let resto = 0
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do{
    dni = prompt("Ingresar número de DNI");

    if(dni != null){

        dni = parseInt(dni);

        while(dni<0 || dni>99999999 || (isNaN(dni))){
            if(isNaN(dni)){
                alert("Se solicita ingresar un DNI. Por favor, ingrese DNI nuevamente.");
            }
            else{
                alert("Número de DNI inválido. Por favor, ingrese DNI nuevamente.");
            }

            dni = prompt("Ingresar número de DNI");
            dni = parseInt(dni);
        }

        resto = dni % 23;

        alert("DNI: " + dni + " - " + letras[resto]);
    }


}while(dni != null)

*/
/*
6

for(let i=1; i<=30; i++){
    for(let j=0; j<i; j++){
        document.write(i);
    }
    document.write("<br>");
}
*/

/*
7

let numero = parseInt(prompt("Ingresar número menor de 50"))

if(numero != null && !isNaN(numero)){

    while(numero>50 || (isNaN(numero))){
        if(isNaN(numero)){
            alert("Se solicita ingresar un número. Por favor, ingresar un número." )
        }
        else{
            alert("El número ingresado debe ser menor a 50. Por favor, ingresar otro número.");
        }

        numero = parseInt(prompt("Ingresar número menor de 50"));
    }

    for(let i=numero; i>0; i--){
        for(let j=0; j<i; j++){
            document.write(i);
        }
        document.write("<br>");
    }

}

*/


/*

8

let numero = parseInt(prompt("Ingresar número menor de 50"))

if(numero != null && !isNaN(numero)){

    while(numero>50 || (isNaN(numero))){
        if(isNaN(numero)){
            alert("Se solicita ingresar un número. Por favor, ingresar un número." )
        }
        else{
            alert("El número ingresado debe ser menor a 50. Por favor, ingresar otro número.");
        }

        numero = parseInt(prompt("Ingresar número menor de 50"));
    }

    for(let i=1; i<=numero; i++){
        for(let j=0; j<i; j++){
            document.write(j+1);
        }
        document.write("<br>");
    }

}
*/

/*
9

let numero = parseInt(prompt("Ingresar número menor de 50"))

if(numero != null && !isNaN(numero)){

    while(numero>50 || (isNaN(numero))){
        if(isNaN(numero)){
            alert("Se solicita ingresar un número. Por favor, ingresar un número." )
        }
        else{
            alert("El número ingresado debe ser menor a 50. Por favor, ingresar otro número.");
        }

        numero = parseInt(prompt("Ingresar número menor de 50"));
    }

    for(let i=1; i<=numero; i++){
        for(let j=0; j<i; j++){
            document.write(j+1);
        }
        document.write("<br>");
    }

}

*/
/*
10

let filas = parseInt(prompt("Ingresar número de filas"));
let columnas = parseInt(prompt("Ingresar número de columnas"));
let multiplicacion = filas * columnas;

for(let i=0; i<filas; i++){
    for(let j=0 ; j<columnas; j++){
        document.write(multiplicacion);
        document.write("&nbsp");
        multiplicacion--;
        
    }
    document.write("<br>");
}

*/
/* corregir
11

let nombres = []
let edades = []
let edadMayor = 0
let lugar = 0

for(i=0; i<3; i++){
    nombres[i] = prompt("Ingresar " + (i+1) + "º nombre");
    edades[i] = prompt("Ingresar " + (i+1) + "º nombre");
}

edadMayor = edades[0];

for(i=0; i<3; i++){
    if(edades[i] > edadMayor){
        edadMayor = edades[i];
        lugar = i;
    }
}

document.write("El mayor de los 3 es " + nombres[lugar] + " con " + edades[lugar] + " años.")


*/

/*

12

function aleatorio(){
    let numeroDado = Math.floor(Math.random() * 99) + 1;

    return numeroDado;
}

let numero = aleatorio()

document.write("Número aleatorio = " + numero);

*/
/*
13

let texto = prompt("Ingresar texto");

document.write(texto.toUpperCase())

*/
/*

14



let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(i === (texto.length)-1){
        document.write(texto[i]);
    }
    else{
        document.write(texto[i] + "-");
    }
    
}
*/
/*

15

let contador = 0;
let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        contador++;
    }
}

document.write("El texto '" + texto + "' tiene " + contador + " vocales.")

*/


/*

16

let texto = prompt("Ingresar texto")

for(let i=(texto.length)-1; i>=0; i--){
    document.write(texto[i]);
}

*/
/*

17

let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        document.write("La vocal '" + texto[i] + "' está en la posición " + i);

        break;
    }
}
*/