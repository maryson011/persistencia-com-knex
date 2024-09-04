module.exports = async (conexao) => {
    const dados = await conexao("usuarios")
        .leftJoin("posts", "usuarios.id", "=", "posts.id_usuario")
        .select("usuarios.id", "usuarios.nome", conexao.raw("COUNT (posts.id) as qtde_posts"))
        .groupBy("usuarios.id")
    console.log(dados)
    return dados
}