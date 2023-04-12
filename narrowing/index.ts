/* 
 type narrowing => aqui defino fluxos diferente dependo do tipo dos parametros,
 se os dois forem strings converto eles para numero e mostro a soma
 se os dois forem numeros mostro a soma
 se os dois forem de tipos  diferentes mostro uma mensagem de erro
*/

type StringOrNumber = string | number

function sum(a: StringOrNumber, b: StringOrNumber) {

    if (typeof a === "string" && typeof b === "string") {
        console.log(`${parseFloat(a) + parseFloat(b)}`)
    }

    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    }

    else {
        console.log("Impossível realizar soma !")
    }

}

sum("1", "2")
sum(1, 5)
sum(1, "1")

// criando classe user
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

// criando classe super user que é filha da classe user
class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

// instancia da classe user
const user = new User("user")

// instancia da classe super user
const superUser = new SuperUser("superuser")

function showIntance(user: object) {

    // se for instancia de super user mostra Mensagem abaixo
    if (user instanceof SuperUser) {
        console.log("Olá Super USer")
    }

    // se for instancia de user mostra Mensagem abaixo
    else if (user instanceof User) {
        console.log("Olá user")
    }
}

showIntance(user)
showIntance(superUser)

/*
    com o operador in podemos verificar se uma determinada chave em um objeto
*/
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        if (breed) {
            this.breed = breed
        }

        this.name = name
    }
}

const neguinha = new Dog("neguinha")
const bob = new Dog("bob", "Pastor Alemao")

function showDogDetails(dog: Dog) {
    // Aqui utilizando o operador in para verificar se o cachorro possui raça
    if ("breed" in dog) {
        console.log("Este cachorro é de raça")
    } else {
        console.log("Este cachorro é SRD")
    }
}

showDogDetails(neguinha)
showDogDetails(bob)