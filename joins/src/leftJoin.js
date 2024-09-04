module.exports = async (conexao) => {
    const dados = await conexao("usuarios")
        .select("usuarios.nome as autor", "posts.titulo", "posts.conteudo")
        .leftJoin("posts", "usuarios.id", "=", "posts.id_usuario")
        .whereNotNull("posts.titulo")
    console.log(dados)
    return dados
}