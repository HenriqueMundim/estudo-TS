"use strict";
// Tipos básicos:
const nome = 'Henrique';
const age = 22;
const isValid = true;
// Arrays
const array = [10, 20, 40];
const array2 = ['10', '20', '40'];
// Tuple
let person = [10, 'Amanda']; // Tipo de dado que tem funcionalidade parecida com um array porem os elementos deven ser do tipo declarado respectivamente
// person = [22, 'henrique']
// Lista de tuplas
const people = [[10, 'Amanda'], [12, 'Ale']];
// Intersections 
// Tipo de dado que pode ser um ou outro
const id = 10;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction["down"] = "fdsfdsfa";
})(Direction || (Direction = {}));
const directions = Direction.down;
console.log(directions);
// Type assertion
let data = 'henrique';
let dado = data; // Atribuir a uma variável outra do tipo any porem especificando qual o tipo vai ser
let dado2 = data;
