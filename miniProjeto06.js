//Criar uma função somar a
// soma de todos os múltiplos de 3 e 5

somar(10);
function somar (lim) {
    let mult3 = 0;
    let mult5 = 0;
   for (c = 0; c <= lim; c++) {
        if (c%3 == 0) {
            mult3 += c    
        } if (c%5 == 0) {
            mult5 += c
        }
    } 
    console.log (`a soma dos valores são ${mult3+mult5}`)

}