//Obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const notas = [70,70,80]

let x = notas[0]
let y = notas[1]
let z = notas [2]
let res = ((x+y+z)/3)

console.log (mediaNotas(notas));

function mediaNotas(notas) {
    if (res <= 59) {
        console.log (`F`)
    } else if (res >= 60 && res <= 69) {
        console.log(`D`)
    } else if (res >= 70 && res <= 79) {
        console.log(`C`)
    } else if (res >= 80 && res <= 89) {
        console.log(`B`)
    } else {
        console.log(`A`)
    }
   
} 