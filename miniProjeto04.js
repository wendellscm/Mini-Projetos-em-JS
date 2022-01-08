//Receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

exib()

function exib(lim) {
    for (c = 0; c <= lim; c++)
        if (c%2 == 0) {
            console.log(`${c} é par`)
        } else {
            console.log(`${c} é impar`)
        }
}