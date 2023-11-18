// import express, { Express, Request, Response } from 'express';


// const app: Express = express()


// app.get('/hello', (req: Request, res: Response) => {
//     res.json({'message': 'Hello World.'})
// })

// const sum = (x: number, y: number, z: number): void => {
//     const soma: number = x + y
//     console.log(soma)
//     if(soma > z) {
//         console.log(`${soma} é maior que ${z}`)
//     } else {
//         console.log(`${soma} é menor que ${z}`)
//     }
// }

// sum(10, 20, 25)


// const volume = (raio: number): string => {
//     const volume = 4 / 3 * Math.PI * Math.pow(raio, 3) 
//     return volume.toFixed(2)
// }

// console.log(volume(10))

// const avg = (x: number, y: number, z: number, opcao: string): number | void => {
//     if(opcao.toUpperCase() == 'A') {
//         const avg = (x + y + z) / 3
//         return avg
//     } else if(opcao.toUpperCase() == 'P') {
//         const avg = (x * 5 + y * 3 + z * 2) / (5 + 3 + 2)
//         return avg
//     } else if(opcao.toUpperCase() == 'H') {
//         const avg =  3 / (1 / x + 1 / y + 1 / z)
//         return avg
//     }   
// };

// console.log(avg(10, 10, 10, 'H'));

// const isPrime = (number: number): boolean => {
//     let count = 1
//     for(let i = 0; i < number; i++) {
//         if(number % i == 0) {
//             count++
//         }
//     }
//     if(count > 2) {
//         return false
//     }
//     return true
// }

// console.log(isPrime(50));


// const baskhara = (a: number, b: number, c: number): string => {
//     const delta: number = Math.pow(-b, 2) - (4 * a * c)
    

//     if(delta < 0) {
//         return 'Não possui raizes'
//     } else if(delta == 0) {
//         const raiz: number = (-b + Math.sqrt(delta)) / (2 * a)
//         return `${raiz}`
//     }
//     const raiz1: number = (-b + Math.sqrt(delta)) / (2 * a)
//     const raiz2: number = (-b - Math.sqrt(delta)) / (2 * a)

//     return `${raiz1}, ${raiz2}`
    
// }

// console.log(baskhara(1, -3, -10));


// const isPerfect = (num: number): boolean => {
//     let sum: number = 0
//     for(let i: number = 0; i < num; i++) {
//         if(num % i == 0) {
//             sum += i
//         }
//     }
//     if(sum == num) {
//         return true
//     }
//     return false
// }

// console.log(isPerfect(6));


class Calculator {
    valueA: number;
    valueB: number;
    op: string;

    constructor(valueA: number, valueB: number, op: string) {
        this.valueA = valueA;
        this.valueB = valueB;
        this.op = op;
    };

    testValue(number: any): boolean {
        if(isNaN(number)) {
            return false
        }
        return true
    }
}