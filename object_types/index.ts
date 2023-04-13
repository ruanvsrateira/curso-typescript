// Tipando objeto do parametro

interface Product {
    name: string
    price: number
    isAvailable: true
}

function showProductDetails(product: Product) {
    return `O nome do produto é ${product.name} e o seu preço é ${Number(product.price).toPrecision(4)}`
}

const product: Product = {
    name: "Arroz",
    price: 20.00,
    isAvailable: true
}

console.log(showProductDetails(product))

// Propriedades opcionais nas interfaces

export interface User {
    email: string
    role?: string
}

function showUserDetails(user: User) {
    if("role" in user){
        return `O usuário tem o email ${user.email}, e a função dele é ${user.role}`
    }

    return `O usuario tem o email ${user.email}`
}

console.log(showUserDetails({ email: "ruan@ruan.com", role: "Adiministrador" }))

// readonly nas interfaces
interface Car {
    brand: string
    readonly wheels: number
}

// Apartir daqui não podemos alterar o número de wheels do fusca.
const fusca: Car = {
    brand: "Wolkswagem",
    wheels: 4
}

console.log(fusca)

// Index Signature
interface Coordinate {
    [index: string]: number
}

const cord: Coordinate = {
    x: 12.02,
    y: 13.03
}

console.log(cord)

//Extending types
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const ruan: Human = {
    name: "Ruan",
    age: 18
}

const goku: SuperHuman = {
    name: "goku",
    age: 505,
    superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(ruan, goku)

// Intercection Types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: Character & Gun = {
    name: "arnold",
    type: "12",
    caliber: 12
}

const arnaldo: HumanWithGun = {
    name: "arnoldo",
    type: "escopeta",
    caliber: 762
}

console.log(arnold, arnaldo)

//array readonly
let fruits: ReadonlyArray<string> = ["maça", "banana", "uva"]

// Isso não sera possível => fruits[0] = "pera"

console.log(fruits)

//Tupla
const myTuple: [string, number] = ["ruan", 2]

console.log(myTuple)

//Tupla Readonly
const myTupleReadonly: readonly [string, number] = ["1", 1]

// não será possível fazer isto => myTupleReadonly[0] = "2"

console.log(myTupleReadonly)