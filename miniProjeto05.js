//Criar uma função para ler as propriedades de um objeto e
//exibir somenete as propriedades do tipo string que estão no objeto

const filme = {
    titulo : 'Avenger End Game',
    ano : 2019,
    diretor : 'Russos brothers'
}


exibirPropriedades(filme)
function exibirPropriedades(obj) {
    for (prop in obj) {
        if (typeof prop === 'string') {
            console.log(obj[prop])
        }
    }
}