
// Retorno Void
function funcaoSemRetorno(): void {
    console.log("Está função não tem retorno")
}

funcaoSemRetorno()

// Tipando callback
function greeting(name: string) {
    return `Olá ${name}`
}

function pregreeting(f: (name: string) => string, username: string) {
    console.log(f(username))
}

pregreeting(greeting, "Ruan")

//Generic
function returnFirstItem<T>(arr: T[]): T {
    return arr[0]
}

console.log(returnFirstItem([1, 2, 3, 4, 5, 6]))
console.log(returnFirstItem(["a", "b", "c", "d"]))

// Constraints nos Generics
function returnBiggest<T extends number | string>(num1: T, num2: T): T {
    let biggest: T

    if (+num1 > +num2) {
        biggest = num1
    } else {
        biggest = num2
    }

    return biggest
}

console.log(returnBiggest("22", "234"))

// Definindo tipo do Generic na chamada da função
function mergeArray<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArray<string | number>([1, 2, 3, 4], ["teste", "testando"]))

// Argumentos Default
function somaDefault(n: number, m: number = 0): number {
    return n + m
}

// TIpo Unknown
function showFirstValue(x: unknown) {
    if (Array.isArray(x)) {
        return x[0]
    }

    if (typeof x === "string") {
        return x.split("")[0]
    }

    if (typeof x === "number") {
        return `${x}`.split("")[0]
    }

    return x
}

console.log(showFirstValue("Ruan VIctor"))

// Tipo Never
function showError(): never {
   throw new Error("Erro")
}

//showError()

// Rest Parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((value, sum) => sum + value)
}

console.log(sumAll(1, 2, 3, 4, 5, 6))

// Typing Destructuring parameters 
function showPersonDetails({ name, age }: { name: string, age: number }): string {
    return `Name => ${name}\nAge => ${age}`
}

const person1 = {
    name: "ruan",
    age: 12
}

console.log(showPersonDetails(person1))


console.log(somaDefault(1, 2))
console.log(somaDefault(1))