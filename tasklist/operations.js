//comandos de JavaScript
// 

console.log("Operations script loaded");

let num = 2025;
console.log("Age of edition: " + num);
let str = "Diego Quiñonez";
console.log("Author: " + str);

const pi_value = 3.1416;
console.log("Value of Pi: " + pi_value);

function printMyInput(userInput) {
    console.log("User Input: " + userInput);
}

printMyInput("Hello from operations.js");
printMyInput(31);

let printMyInputES6 = (userInput) => {
    console.log("User Input from ES6 function: " + userInput);
}

printMyInputES6("Hello from ES6 function");
printMyInputES6(45);

let printMyInputES6V2 = userInput => console.log("User Input from ES6 V2 function: " + userInput);

printMyInputES6V2("Hello from ES6 V2 function");
printMyInputES6V2(60);

//Operadores, Comandos, Bucles
// Los operadores aritméticos son operadores que utilizamos para realizar operaciones aritméticas.
// El operador + (más) se utiliza para sumar
// El operador - (menos) se utiliza para restar
// El operador * (estrella o asterisco) se utiliza para multiplicar
// El operador / (barra) se utiliza para dividir
// El operador ** (doble estrella) se utiliza para la exponenciación/potencia
// El operador % (porcentaje) se utiliza para la operación de módulo (el residuo que queda después de la división)

console.log("5 + 2 = ", 5 + 2);
console.log("5 - 2 = ", 5 - 2);
console.log("5 * 2 = ", 5 * 2);
console.log("5 / 2 = ", 5 / 2);
console.log("5 ** 2 = ", 5 ** 2);
console.log("5 % 2 = ", 5 % 2);

//El operador más (+) también se utiliza para la concatenación de cadenas. Al usar un + con un número y una cadena, ambos se tratan como una cadena y se concatenan en lugar de sumarse.
// Las expresiones se leen de izquierda a derecha, por lo que al sumar dos números y luego una cadena, se interpretará el primer + como suma y el segundo + como concatenación.

console.log("5 + 2 + ' es igual a 7' = ", 5 + 2 + " es igual a 7");
console.log("'5 + 2 es igual a ' + 5 + 2 = ", "5 + 2 es igual a " + 5 + 2);

console.log("5 + 3 = ", 5 + 3)
console.log("5 + \"3\" = ", 5 + "3")
console.log("5 + 5 + \"3\" = ", 5 + 5 + "3")
console.log("\"3\" + 5 + 5 = ", "3" + 5 + 5)
console.log("5 + 5 + \"3\" + 5 = ", 5 + 5 + "3" + 5)

// Los operadores de asignación son operadores que se utilizan para asignar valores a las variables.

// El operador = se utiliza para asignar el valor de la derecha a la variable de la izquierda.
// El operador += se utiliza para incrementar el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp + val donde tmp es una variable y val es un valor arbitrario).
// El operador -= se utiliza para decrementar el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp - val donde tmp es una variable y val es un valor arbitrario).
// El operador *= se utiliza para multiplicar el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp * val donde tmp es una variable y val es un valor arbitrario).
// El operador /= se utiliza para dividir el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp / val donde tmp es una variable y val es un valor arbitrario).
// El operador **= se utiliza para elevar el valor almacenado en el operando de la izquierda a la potencia del valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp ** val donde tmp es una variable y val es un valor arbitrario).
// El operador %= se utiliza para obtener el módulo del valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp % val donde tmp es una variable y val es un valor arbitrario).

let a = 5;
console.log("Initial value of a: ", a);

a += 3; // a = a + 3
console.log("After a += 3, value of a: ", a);

a -= 2; // a = a - 2
console.log("After a -= 2, value of a: ", a);

a *= 4; // a = a * 4
console.log("After a *= 4, value of a: ", a);

a /= 3; // a = a / 3
console.log("After a /= 3, value of a: ", a);

a **= 2; // a = a ** 2
console.log("After a **= 2, value of a: ", a);

a %= 5; // a = a % 5
console.log("After a %= 5, value of a: ", a);

// Los operadores de comparación se utilizan para comparar valores o variables con otros valores o variables
// El operador == verifica si el operando a la izquierda es igual en valor al operando a la derecha
// El operador === verifica si el operando a la izquierda es igual en valor y en tipo al operando a la derecha
// El operador != verifica si el operando a la izquierda no es igual en valor al operando a la derecha
// El operador > verifica si el operando a la izquierda es mayor que el de la derecha
// El operador < verifica si el operando a la izquierda es menor que el de la derecha
// El operador >= verifica si el operando a la izquierda es mayor o igual que el de la derecha
// El operador <= verifica si el operando a la izquierda es menor o igual que el de la derecha

console.log("5 == '5' : ", 5 == '5'); // true
console.log("5 === '5' : ", 5 === '5');// false
console.log("5 === '5' : ", 5 === 5);//true

console.log("5 != '5' : ", 5 != '5'); // false
console.log("5 !== '5' : ", 5 !== '5');// true

console.log("5 > 3 : ", 5 > 3);
console.log("5 < 3 : ", 5 < 3);

console.log("5 >= 5 : ", 5 >= 5);
console.log("5 <= 5 : ", 5 <= 5);

// Los operadores lógicos se utilizan para combinar dos o más expresiones condicionales
// El operador && (AND) devuelve true si ambas expresiones son true
// El operador || (OR) devuelve true si al menos una de las expresiones es true
// El operador ! (NOT) invierte el valor de la expresión, si es true devuelve false y viceversa

// Operadores Lógicos se utilizan para combinar más de una condición.
// El operador && verifica si la condición a la izquierda y a la derecha son verdaderas. Devuelve verdadero solo si ambas condiciones son verdaderas. De lo contrario, devuelve falso.
// El operador || verifica si ya sea la condición a la izquierda es verdadera o la de la derecha es verdadera. Devuelve verdadero incluso si una de las dos condiciones es verdadera.
// El operador ! verifica si la condición no se cumple.

let expr1 = (5 > 3);
let expr2 = (2 < 1);

console.log("expr1 && expr2 : ", expr1 && expr2); // false AND
console.log("expr1 || expr2 : ", expr1 || expr2); // true OR
console.log("!expr1 : ", !expr1); // false NOT
console.log("!expr2 : ", !expr2); // true NOT

var raining = false
var cloudy = true
console.log("It is raining: ", raining)
console.log("It is cloudy: ", cloudy)
console.log("It is raining AND cloudy: ", raining && cloudy)
console.log("It is raining OR cloudy: ", raining || cloudy)
console.log("It is not raining: ", !raining)
console.log("It is not cloudy: ", !cloudy)

// Evaluación de Cortocircuito

// La evaluación de cortocircuito es un concepto en el que el compilador omitirá la verificación de subexpresiones en una declaración compuesta (una declaración con operadores lógicos) una vez que se determina el valor.

// exp1 && exp2 no evaluará exp2 si exp1 es falso porque si incluso una expresión es falsa con un &&, la expresión completa es falsa.
// exp1 || exp2 no evaluará exp2 si exp1 es verdadero porque si incluso una expresión es verdadera con un ||, la expresión completa es verdadera.
// Esto puede ser muy útil al evaluar ciertas expresiones, y se debe aprovechar donde sea necesario.

var chocolate = true
var candy = false
console.log("There is chocolate: ", chocolate)
console.log("There is candy: ", candy)
console.log("There is candy AND chocolate: ", chocolate && candy, " -- Only candy is evaluated")
console.log("There is chocolate OR candy: ", chocolate || candy, " -- Only chocolate is evaluated")

// if - else if - else Las declaraciones condicionales son muy útiles para controlar el flujo de tu código.

//Accept a input from the user. If it is a number, print the multiplication table for the number. Else print the input and the length of the input.
let user_input = prompt('Enter a value');
//Check if the user did not input anything
if (!user_input) {
    console.log("You did not input anything")
}
//Check if the user input is not a number
else if (isNaN(user_input)) {
    console.log("Your input is ", user_input)
    console.log("The length of your input is ", user_input.length)
} 
//The only option remaining is that the input is a number
else {
    console.log(user_input, " X 1 = ", user_input*1)
    console.log(user_input, " X 2 = ", user_input*2)
    console.log(user_input, " X 3 = ", user_input*3)
    console.log(user_input, " X 4 = ", user_input*4)
    console.log(user_input, " X 5 = ", user_input*5)
    console.log(user_input, " X 6 = ", user_input*6)
    console.log(user_input, " X 7 = ", user_input*7)
    console.log(user_input, " X 8 = ", user_input*8)
    console.log(user_input, " X 9 = ", user_input*9)
    console.log(user_input, " X 10 = ", user_input*10)
}


// Las declaraciones switch-case se utilizan para reemplazar múltiples condiciones if - else if que verifican la misma variable. Después de que se satisface una de las condiciones y se ejecuta el bloque de código, el control debe salir explícitamente del bloque switch con break. De lo contrario, se ejecutarán todas las demás condiciones hasta que se encuentre una declaración break o hasta que no haya más código.

let user_input_day = prompt('Enter a number between 1 to 7');

//Using logical OR operator to check if the input is a number and it is between 1 to 7
if(isNaN(user_input_day) || user_input_day< 1 || user_input_day>7) {
    console.log("Invalid input")
} else {
    user_input_day = parseInt(user_input_day)
    switch(user_input_day){
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Invalid entry");
    }
}

// Los bucles se pueden utilizar cuando el mismo bloque de código necesita ejecutarse muchas veces.
// Los bucles for tienen un valor inicial, una condición en base a la cual se ejecuta el bucle, y un valor incremental.

//Accept a input from the user. If it is a number print the multiplication table for the number. 
let user_input_for = prompt('Enter a number');
//Check if the user input is a number
if(!isNaN(user_input_for)) {
    //Using for loop for the repetitive statement
    for (let i=0; i<10; i++) {
        console.log(user_input_for, " X ", i, " = ", user_input_for*i)
    }
}

// Los bucles while tienen solo una expresión: una condición en base a la cual se ejecuta un bloque de código. Este es el mismo tipo de expresión que la segunda en un bucle for.
//The code below is to find the length of the words the user is entering. The loop will go on and on until the user chooses not to continue by pressing 'n'

let do_more = true

while(do_more) {
    //Accept a input from the user. 
    let user_input = prompt('Enter a word');
    //Check if the user input is not a number and then print the length of the input
    if(isNaN(user_input)) {
        console.log("Length of the word you entered is " + user_input.length)
    } else {
        console.log("You entered a number. Only words are allowed")
    }
    let should_continue = prompt("Do you want to continue. Press n to stop")
    
    if(should_continue === "n") {
        do_more = false
    }
}


// Colecciones

// Un arreglo es una colección indexada. Las posiciones de índice comienzan desde 0. El elemento en la primera posición está en el índice 0, el segundo elemento está en la posición 1, y así sucesivamente. El índice de la última posición siempre será uno menos que la longitud del arreglo.
let myArray = ["Jack","Jill",4,5,true,"John"]
console.log(myArray[0]);
console.log(myArray[5]);

// Para iterar a través de arreglos, hay un tipo especial de bucle for, forEach, que se ejecuta para cada valor en el arreglo dado.
myArray.forEach(element => {
    console.log(element)
})


// Para encontrar la posición del índice y el valor, podemos usar el método genérico Object.entries, que se puede utilizar con todos los objetos de colección. Esto mapea cada posición del índice al valor.
for (const [index, value] of Object.entries(myArray)) {
  console.log(index, " - ", value);
}

// El objeto Map asigna una clave a un valor. Las claves deben ser únicas. Los valores pueden ser cadenas, enteros, flotantes o cualquier otro tipo de dato válido de JavaScript. Un objeto Map vacío se puede crear con la palabra clave new.

let myMap = new Map();
//Add a key-value pair to the map, with a key of "name" and a value of "John". 
myMap.set("name", "John")
//Add another key-value pair to the map, with a key of "age" and a value of 22.
myMap.set("age", 22)
myMap.forEach((val,key) => {
    console.log(key, " - ", val)
})

// Un objeto es una colección no indexada. Los objetos tienen propiedades y valores asociados con esas propiedades. A diferencia de los arreglos, los objetos no tienen un orden específico.
let myObject = {
    name: "Jack",
    age: 25,
    isEmployed: true,
    department: "IT"
}
console.log(myObject["name"])
console.log(myObject.age)

// Para iterar a través de las propiedades y valores de un objeto, podemos usar el método genérico Object.entries, que se puede utilizar con todos los objetos de colección. Esto mapea cada propiedad al valor.
for (const [property, value] of Object.entries(myObject)) {
  console.log(property, " - ", value);
}

// Otra forma de iterar a través de las propiedades y valores de un objeto es usar el método genérico Object.keys, que se puede utilizar con todos los objetos de colección. Esto mapea cada propiedad al valor.
Object.keys(myObject).forEach((key) => {
    console.log(key, " - ", myObject[key]);
});

// Otra forma de iterar a través de las propiedades y valores de un objeto es usar el método genérico Object.values, que se puede utilizar con todos los objetos de colección. Esto mapea cada valor a la propiedad.
Object.values(myObject).forEach((value) => {
    console.log(value);
});