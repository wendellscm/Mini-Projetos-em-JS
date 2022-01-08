//Divisível por 3 -> Fizz
//Divisível por 5 -> Buzz
//Divisível por 3 e 5 -> FizzBuzz
//Não divisível por 3 ou por 5 -> entrada
//Não é um número -> 'Não é um número'

const result = fizzBuzz(); 
console.log(result);

function fizzBuzz(ent){
    if (typeof ent !== 'number') {
        return 'Não é um número'
    } else if (ent%3 == 0) {
        return 'fizz'
    } else if (ent%5 == 0) {
        return 'Buzz'
    } else if (ent%3 == 0 && ent%5 == 0) {
        return 'FizzBuzz'
    } else {
        return ent
    }
 }

