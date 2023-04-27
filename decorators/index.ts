// Primeiro decorator
function myDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("Iniciando Decorator!")
        console.log("Target -> ", target)
        console.log("propertyKey -> ", propertyKey)
        console.log("descriptor -> ", descriptor)
    }
}

class MyClass {
    @myDecorator()
    testing() {
        console.log ("Terminando execução do método")
    }
}

const myObj = new MyClass()
myObj.testing()

//Multiplos Decorator
function a() {
    console.log("A. Decorator")
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    }
}

function b() {
    console.log("B.")
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    }
}

class MultiplesDecorator {

    @a()
    @b()
    testing() {
        console.log("Terminando a Execução")
    }

}

const multipleDecorator = new MultiplesDecorator()
multipleDecorator.testing()

//Class Decorator
function classDec(decorator: Function) {
    if(decorator.name === "User") {
        console.log("Criando Usuário!")
    }
}

@classDec
export class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const user = new User("Ruan")

//Decorator de Método
function machineDec(value: boolean) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = value
    }
}

class Machine {
    name
    
    constructor(name: string) {
        this.name = name
    }

    @machineDec(false)
    showName() {
        console.log(`O nome da máquina é: ${this.name}`)
    }
}

const trator = new Machine("Trator")

// Decorators de propriedades - PropertyDecorators
function formatID() {
    return (target: Object, propertyKey: string) => {
        let value: string;

        const getter = () => {
            return value
        }

        const setter = (newValue: string) => {
            value = newValue.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        })
    }
}

class ID {
    @formatID()
    id

    constructor(id: string) { this.id = id }
}

const newProductID = new ID("12")
console.log(newProductID.id)

// Exemplo real Class Decorator
function CreateDateColumn(created: Function) {
    created.prototype.created_at = new Date()
}

@CreateDateColumn
class Book {
    name
    created_at?: Date

    constructor(name: string) {
        this.name = name
    }
}

const bibliaSagrada = new Book("Biblia Sagrada")
console.log(bibliaSagrada.created_at)

// Property Decorator 
function Min(limit: number) {
    return (target: any, propertyKey: string) => {
        let value: string

        const getter = () => {
            return value
        } 

        const setter = (newVal: string) => {

            if(newVal.length < limit) {
                console.log("A propriedade deve ter no minimo " + limit + " caractéres")
                return
            }

            value = newVal
        }
    
        Object.defineProperty(target, propertyKey, {
            get: getter, set: setter
        })

    }
}

class Admin {
    @Min(3)
    username

    constructor(username: string) {
        this.username = username
    }
}

const userAdmin = new Admin("fernando") 

