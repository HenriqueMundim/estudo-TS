// Types

type Order = {
    orderId: number,
    price: number
};

type User = {
    firstName: string,
    lastName: string,
    age: number,
    email?: string // Torna essa propriedade opcional
    password?: string,
    orders: Order[],
    register(): string
};

type Author = {
    books: string[]
};

const user: User = {
    firstName: 'Henrique',
    lastName: 'Matos',
    age: 22,
    orders: [
        {
            orderId: 1,
            price: 1000
        },
        {
            orderId: 2,
            price: 1500
        }
    ],
    register() {
        return 'ok'
    }
};

// Ao passar uma propriedade opcional como parametro para uma função, o argumento na função também deve ser opcional ou falar que ela é realmente do tipo

// const imprime = (message?: string) => {}

// imprime(user.password)

const imprime = (message: string) => {};

imprime(user.password!);

// Unions 

// Assinalar a uma variavel mais de um tipo de dado ao mesmo tempo

const author: User & Author = {
    firstName: 'Henrique',
    lastName: 'Matos',
    age: 22,
    orders: [],
    books: ['A volta dos que não foram'],
    register() {
        return 'ok'
    }
};

// Interfaces 

interface UserInterface {
    readonly firstName: string,
    email: string
};

const userInfo: UserInterface = {
    firstName: 'Henrique',
    email: 'hmm@email.com'
}

// userInfo.firstName = 'hhh' Não é possivel pois definimos a propriedade firstName apenas como leitura não sendo possivel assim reatribuir valor a ela
// É possivel assinalar uma intersection a um type mas não a uma interface