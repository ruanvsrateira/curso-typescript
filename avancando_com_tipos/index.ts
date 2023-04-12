// tipando array de nomes com string[]
const nomes: string[] = ["Ruan", "Victor", "Henrique"]

// tipando array de números com number[]
const numeros: number[] = [1, 2, 3, 4]

// tipando array de nomes com Array<string>
const outrosNomes: Array<string> = ["Ruan", "Victor", "Henrique"]

// tipando array de números com Array<number>
const outrosNumeros: Array<number> = [1, 2, 3, 4]

// tipando array com o any [Não recomendado]
const array1: any = [1, "tst", true, { nome: "Ruan" }]

// tipando parâmetros e retorno da função
export function soma(numero1: number, numero2: number): number {
    return numero1 + numero2
}

// retornara o resultado da soma entre 1 e 2
const resultadoSoma = soma(1, 2)

function passCoordinates(coordinate: { x: number, y: number }): void {
    console.log(`x => ${coordinate.x}, y => ${coordinate.y}`)
}

passCoordinates({ x: 12, y: 134 })

function showNumbers(a: number, b: number, c?: number) {
    console.log("A " + a)
    console.log("B " + b)

    if (c) {
        console.log("C " + c)
    }
}

showNumbers(1, 2)


// Como parâmetro ele pode receber um número ou um texto
function showBalance(balance: number | string) {
    console.log(`${balance}`)
}

showBalance(123)

// Tipe Alias - tipo personalizado indicando que o ID pode ser string ou number
type ID = number | string

function showID(id: ID) {
    console.log(id)
}

// Definindo tipo do Point sendo um objeto com as chaves x, y e z.
interface Point {
    x: number
    y: number
    z: number
}

function showPoint(obj: Point) {
    console.log(`Ponto X => ${obj.x}`)
	console.log(`Ponto Y => ${obj.y}`)
	console.log(`Ponto Z => ${obj.z}`)
}

const point: Point = {
    x: 20,
    y: 123,
    z: 93
} 

showPoint(point)


showID(2)

// Definindo Interface inicial de Person
interface Person {
    name: string
}

// Após esta linha será adicionado o campo age a interface
interface Person {
    age: number
}

const person: Person = {
    name: "RUan",
    age: 29
}

function showPerson(person: Person) {
    console.log(person)
}

showPerson(person)

// Aqui estou definindo o tipo Direction, que quem usar este tipo deve ter valor right ou left ou center não podendo ser outro..
type Direction = "right" | "left" | "center"


function showDirection(direction: Direction) {
    console.log(direction)
}

showDirection("center")

const n = 100n

// Irá exibir no console.log BiGInt
console.log(typeof n)

const symbolA = Symbol("a")
const symbolB = Symbol("a")

// retornará true pois nunca serão iguais devido ao tipo symbol
console.log(symbolA !== symbolB)

console.log(nomes, numeros)
console.log(outrosNomes, outrosNumeros)
console.log(array1)
console.log(resultadoSoma)