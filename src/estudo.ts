// Tipos básicos:

const nome: string = 'Henrique'
const age: number = 22
const isValid: boolean = true

// Arrays

const array: number[] = [10, 20, 40]
const array2: string[] = ['10', '20', '40']

// Tuple

let person: [number, string] = [10, 'Amanda'] // Tipo de dado que tem funcionalidade parecida com um array porem os elementos deven ser do tipo declarado respectivamente

// person = [22, 'henrique']

// Lista de tuplas

const people: [number, string][] = [[10, 'Amanda'], [12, 'Ale']]

// Intersections 
// Tipo de dado que pode ser um ou outro

const id: string | number = 10

// Enum

enum Direction {
    up = 1,
    down = 'fdsfdsfa'
}

const directions = Direction.down
console.log(directions);

// Type assertion

let data: any = 'henrique'

let dado = data as string // Atribuir a uma variável outra do tipo any porem especificando qual o tipo vai ser
 
let dado2 = <string>data