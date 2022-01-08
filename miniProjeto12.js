/*Criar um obj de postagem de blog 
que contenham as seguintes propriedades

titulo
mensagem
autor
vizualizacoes
comentarios 
    (autor,mensagem)
    estaAoVivo
*/

let postagem = new Object() 
postagem.titulo = '';
postagem.mensagem = '';
postagem.autor = '';
postagem.vizualizacoes = '',
postagem.comentario = ''
postagem.estarAoVivo = ''

for (let i in postagem) {
    console.log(postagem[i])
}


