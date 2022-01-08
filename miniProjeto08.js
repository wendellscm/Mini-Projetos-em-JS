//Criar uma função que exibe a quantidade de *
//que aquela linha possui

exib(7);

function exib(line) {
    let ast = '';
    
    for (c=0; c < line; c++) {
     ast += '*'
     console.log(ast)
    }

}