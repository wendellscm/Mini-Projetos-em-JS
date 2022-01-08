// Criar dois objetos
//Verificar se eles são iguais em:
//propriedade e memória

function endereco(rua,cidade,cep) {
        this.rua = rua,
        this.cidade = cidade,
        this.cep= cep
}

const end1 = new endereco ('x','y','z')
const end2 = new endereco ('a','b','c')

function igualdade(end1,end2) {
    return end1.rua === end2.rua &&
           end1.cidade === end2.cidade &&
           end3.cep === end3.cep 
}

console.log(igualdade(end1,end2))

function Seila(end1,end2) {
    return end1 === end2;
}

console.log(Seila(end1,end2))