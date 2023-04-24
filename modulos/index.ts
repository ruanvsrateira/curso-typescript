// 1 - Importação de Arquivos 
import importGreet from "./greet";

importGreet()

// Importando com destructuring
import { x } from "./variable";

console.log(x)

// Multiplas importações
import { a, b, myFunction } from "./multiple";

console.log(a, b)
myFunction()

// Importando Alias
import { someName as sn } from "./changename";

console.log(sn)

// importando tudo de um arquivo
import * as numbers from "./numbers"

console.log(numbers.n1, numbers.n2, numbers.n3)

// importando tipos 
import { Human } from "./myTypes";

const human: Human = {
    name: "Ruan",
    age: 18
}

console.log(human)