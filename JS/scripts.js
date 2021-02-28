// Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person)
console.log(`${person.name} tem ${person.age} anos.`)

// Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// acessar valores dentro do array
console.log(animals[0])
console.log(animals.length)
console.log(animals[3].name)