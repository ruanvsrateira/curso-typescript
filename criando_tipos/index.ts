//Generics 
function showData<T>(data: T): string {
    return `O dado é ${data}`
}

console.log(showData(25))

//Generic constraints
function ProductName<T extends { name: string }>(object: T) {
    return `O nome do produto é ${object.name}`
}

console.log({ name: "arroz", type: "alimentação" })

//Generics com Interface
interface MyObject<T, U, V> {
    name: string
    wheels: T
    engine: U
    color:  V
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car =  {name: "fusca", wheels: 4, engine: 1.0, color: "white"}
const myPen: Pen = {name: "bic", wheels: false, engine: false, color: "blue"}

console.log(myCar, myPen)

// Keyof Type Parameters
function showKeyOfOBject<T, K extends keyof T>(object: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor ${object[key]}`
}

const computer = {
    hd: "3TB",
    ssd: "240GB"
}

console.log(showKeyOfOBject(computer, "ssd"))

// Keyof Operator
type Character = { name: string, age: number, hasLicenseDriver: boolean }

type C = keyof Character

function showKeyOfCharacter(character: Character, nameKey: C) {
    return `${character[nameKey]}`
}

const character: Character = {
    name: "Ruan",
    age: 18,
    hasLicenseDriver: false
}

console.log(showKeyOfCharacter(character, "name"))

// Typeof Type operator
const userName: string = "ruanvsrateira"
const email: typeof userName = "ruanvsrateira@gmail.com"

console.log(userName, email)

// Indexed acess Type
type Truck = { name: string, year: number, km: number }

const newTruck: Truck = {
    name: "Volvo",
    year: 2023,
    km: 22222222
}

function showKm(km: Truck["km"]) {
    return `O veicúlo tem ${km} quilometros rodados.`
}

console.log(showKm(newTruck.km))

// Conditional Types
class  A {}
class B extends A {}

type myType = B extends A ? string : number

const myConst: myType = "123"

// Template literal type 
type TestA = "testA"
type TestB = "testB"
type TestC = `${TestA} e ${TestB}`

const testLiteralType: TestC = "testA e testB"

console.log(testLiteralType)