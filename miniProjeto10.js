//Criar um objeto que contenha:
// Rua, Cidade,CEP
//exibirEndereço(endereço)

function exibirEndereço(rua,cidade,cep){
    return {
        rua,
        cidade,
        cep,
    }

}

console.log(exibirEndereço('2', '1' , 123456789))


let endereco = {
    rua: '1',
    cidade: '2',
    cep: 0
}

function exibirEndereço(endereco) {
    for (let x in endereco)
    console.log(x,endereco[x])
}

exibirEndereço(endereco);