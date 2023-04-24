// Aqui criamos a classe sem valores indicando o ! depois dos atributos
export class User {
    name!: string
    age!: number
}

const ruan = new User() 
ruan.name = "Ruan"
ruan.age = 12

console.log(ruan)

// Contructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const newRuan = new NewUser("Ruan", 12)
console.log(newRuan)

// Campo Readonly
class Car {
    name
    readonly wheels = 2

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("fusca")
console.log(fusca)

// herança

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("trator")

class KillerMachine extends Machine{
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const maquinaRobotica = new KillerMachine("destroyer", 4)
console.log(trator,"\n", maquinaRobotica)

// Métodos
class Dwart {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        return "Olá Estranho!"
    }
}

const jimmy = new Dwart("Jimmy")
console.log(jimmy.greeting())

//this
class Truck {
    model 
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetais() {
        return `Caminhão do modelo ${this.model} e tem ${this.hp} hp de potencia`
    }
}

const truck = new Truck("Scania", 540)
console.log(truck.showDetais())

//Getters
class Person {
    name 
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

const person = new Person("RUan", "Rateira")
console.log(person.fullName)

//Setters 
class Cords {
    x!: number
    y!: number
    
    set fillX(x: number) {
        if(x == 0){
            return
        }

        this.x = x
    
        console.log("X inserido com sucesso!")
    }

    set fillY(y: number) {
        if (y == 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso!")
    }

    get getCords() {
        return `X: ${this.x} Y: ${this.y}`
    }
}

const myCords = new Cords()
myCords.fillX = 10
myCords.fillY = 12
console.log(myCords.getCords)

// Implementando interfaces com classes
interface showTitle {
    itemTitle(): string
}

class BlogPost implements showTitle {
    title
    
    constructor(title: string) {
        this.title = title
    }
    
    itemTitle(): string {
        return "O tiitulo do post é "+this.title
    }

}

const myPost = new BlogPost("Title of post Google")
console.log(myPost.itemTitle())

//Override de métodos
class Base {
    someMethod() {
        return "Alguma coisa"
    }
}

class Nova extends Base {
    someMethod() {
        return "Testando outra coisa"
    }
} 

const newNova = new Nova()
console.log(newNova.someMethod())

// Visibilidade public
class C {
    public x = 10
}

const cInstance = new C()
console.log(cInstance.x)

class D extends C { }

const dInstance = new D()
console.log(dInstance.x)

// Visibilide protected
class E {
    protected x = 10
}

class F extends E {

    showX() {
        return `X: ${this.x}`
    }

}

const fInstance = new F()
console.log(fInstance.showX())

// Visibilidade Private
class PrivateClass {
    private name = "Private name"

    showName() {
        return `${this.name}`
    }
}

const pObejct = new PrivateClass()
console.log(pObejct.showName())

// Static Members
class StaticMembers {
    static prop = "Test static"

    static getProp() {
        return this.prop
    }
}
console.log(StaticMembers.prop, StaticMembers.getProp())

// Generic class
class GenericClass<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst(){
        return this.first
    }

    get showSecond() {
        return this.second
    }
}

const genericClassInstance = new GenericClass("0", 1)
console.log(genericClassInstance.showFirst, genericClassInstance.showSecond)

// Parameters Properties
class ParametersProperties {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Quantidade em estoque é ${this.qty}`
    }

    get showPrice() {
        return `Preço ${this.price}`
    }
}

const shirt = new ParametersProperties("Shirt", 12, 12.99)
console.log(shirt.name, shirt.showPrice, shirt.showQty)

// Class Expressions 
const myClass = class<T> {
    constructor(public name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Jones")
console.log(pessoa.name)


// Abstract class
abstract class abstractclass {
    abstract showName(): void
}

class abstractExample extends abstractclass {
    constructor(public name: string) {
        super()
        this.name
    }

    showName(): void {
        console.log(this.name)
    }
}

const newAbstractObject = new abstractExample("Josias")
newAbstractObject.showName()

// Relação entre classes
class Dog {
    name!: string 
}

class Cat {
    name!: string
}

const animal: Dog = new Cat()
console.log()