/*Tipos de dados

STRING

* Cadeia de caracteres

"" // aspas duplas
'' // aspas simples
`` // template literals ou template strings

*/
//Ex.:

console.log("Bom dia")
console.log('Bom dia')
console.log(`Bom dia`)
console.log(`
Bom dia
`)
console.log('"Bom" "dia"')
console.log("'Bom' 'dia'")
console.log(`Bom dia ${1 + 1}`)

/*

NUMBER

33 // inteiros
12.5 // reais - float
Nan // Not a Number
Infinity // infinito

*/
//Ex.:

console.log(33)
console.log(12.5)
console.log(12.5 / "aaa")
console.log(12.5 === Infinity)

/*

BOOLEAN

* somente 2 valores

true // verdadeiro
false // falso

*/
//Ex.:

console.log(false)
console.log(true)

/*

UNDEFINED = INDEFINIDO
- não existe

NULL = NULO
- nulo
- objeto que nã possui nada dentro
- difernete de indefinido

*/
//Ex.:

console.log(null === undefined)

/*

OBJECT

- Objeto
- Propriedade / Atributos
- Funcionalidades / Métodos

{ propriedade: "valor" }

*/
//Ex.:

console.log({
    name: "Guilherme",
    idade: 17,
    andar: function() {
        console.log('andar')
    }
})

/*

ARRAY (VETORES)
- Uma lista
- Agrupamento de dados

["Guilherme", 17]

*/
//Ex.:

console.log([
    "Rodas",
    "Pneus",
    "Portas",
    1,
    2,
    3
])