module.exports = async (conexao) => {
    const dados = await conexao("usuarios")
        .select("usuarios.nome as autor", "posts.titulo", "posts.conteudo")
        .innerJoin("posts", "usuarios.id", "=", "posts.id_usuario")
    console.log(dados)
    return dados
}