// 1. Declarando uma variavel de nome weight
let weight;

// 2. Que tipo de dado é variavel acima?
console.log(typeof weight);

/* 3. Declare uma variavel e atribua valores
para cada um dos dados:

• name: string
• age: Number (integer)
• stars: Number (float)
• isSubscribed: Boolean
*/
let name = "Gustavo"
let age = 15
let stars = 46.888
let isSubscribed = false

/* 4. A variavel student abaixo é de que tipo de dado?

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem:

<name> de idade <age> pesa <weight> kg.

Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

*/

let student = {};
console.log(typeof student)

let student = {
    name: "Ana",
    age: 21,
    weight: 45
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/* 5. Declare uma variavel do tipo Array, de nome students e atribua
a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = [];

/* 6. Retribua valor para a variavel acima, colocando dentro dela
o objeto students da questão 4. (Não copiar e colar o objeto, mas usar
 o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)

/* 7. Coloque no console o valor da posição zero do Array acima
 */

console.log(students[0])

/* 8. Crie um novo student e coloque na posição 1 do Array students
 */

const john = {
    name: "John",
    age: 22,
    weight: 56.6,
    isSubscribed: true
}

students = [
    student,
    john
]
console.log(students)

students[1] = john
console.log(students)

/* 9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que?
Apos sua resposta, pode o codigo e veja se voce acertou.

console.log(a)
var a = 1
*/

console.log(a)
var a = 1